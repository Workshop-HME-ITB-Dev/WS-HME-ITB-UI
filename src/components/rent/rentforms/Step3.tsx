import { useQuery } from '@apollo/client';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { GET_RENT_DATES } from '../../../graphql/rentQuery';
import { GetRentDatesResponse } from '../../../graphql/rentQuery.types';
import { GetToolsResponse } from '../../../graphql/toolQuery.types';
import { GET_TOOLS } from '../../../graphql/toolsQuery';
import AlertCard from '../../dashboard/basiccomponent/AlertCard';
import Spinner from '../../Spinner';
import { StepProps, ToolRent } from '..//rent.types';
import ToolCard from './ToolCard';

const Step3 = ({
  formData,
  setFormData,
  error,
  setError
}: StepProps): JSX.Element => {
  const { error: gqlToolsError, data: gqlToolsData, refetch: refetchTools } = useQuery<GetToolsResponse>(GET_TOOLS, { fetchPolicy: 'cache-and-network' });
  const { error: gqlRentsError, data: gqlRentsData, refetch: refetchRents } = useQuery<GetRentDatesResponse>(GET_RENT_DATES, { fetchPolicy: 'cache-and-network' });
  const [showAlert, setShowAlert] = useState<boolean>(true);
  const refreshData = async () => {
    await refetchTools();
    await refetchRents();
  }
  useEffect(() => {
    refreshData();
  }, []);
  return (
    <>
      {showAlert && gqlToolsError && <AlertCard data={{
        title: 'ERROR',
        desc: gqlToolsError.message,
        type: 'error'
      }} onClose={setShowAlert} />}
      {showAlert && gqlRentsError && <AlertCard data={{
        title: 'ERROR',
        desc: gqlRentsError.message,
        type: 'error'
      }} onClose={setShowAlert} />}

      <div className="flex flex-wrap justify-center items-start w-full px-4 py-2">
        {!(gqlRentsData && gqlToolsData) ? <Spinner color='text-ws-orange' /> : <>
          {
            gqlToolsData?.tools.filter((item) => item.totalStock > 0 && item.activated).map((item) => {
              let updatedStock = item.totalStock;
              // count overlap from rents rentPickupDate<pickupDate<rentReturnDate or rentPickupDate<returnDate<rentReturnDate 
              let overlap = 0
              const { pickupDate, pickupHour, pickupMinute, returnDate, returnHour, returnMinute } = formData;

              const pickupDateFull = new Date(pickupDate);
              pickupDateFull.setHours(Number(pickupHour));
              pickupDateFull.setMinutes(Number(pickupMinute));
              const returnDateFull = new Date(returnDate);
              returnDateFull.setHours(Number(returnHour));
              returnDateFull.setMinutes(Number(returnMinute));

              // filter rents data, only in waiting_pickup and waiting_return
              // for each rent checked, check overlap if there's tools inside rent, cond above met (overlapping dates),
              // overlap equals number of quantity of that tool rented by the rent
              const rentDataFiltered = gqlRentsData?.rentdates.filter(x => (x.status === 'waiting_pickup' || x.status === 'waiting_return'));
              rentDataFiltered?.forEach(rent => {
                const rentToolsParsed: ToolRent[] = JSON.parse(rent.tools);

                const toolFound = rentToolsParsed.find(x => x.toolId === item.id);
                if (toolFound && (moment(pickupDateFull, undefined, '[]').isBetween(rent.fromDate, rent.expectedReturnDate, undefined, '[]') ||
                  moment(returnDateFull).isBetween(rent.fromDate, rent.expectedReturnDate))) {
                  overlap += toolFound.quantity;
                }
              });
              // item.totalStock = totalStock - overlap
              updatedStock -= overlap;
              // find formData with itemId, if quantity > item.totalStock, quantity = item.totalStock
              const indexToolToRent = formData.tools.findIndex((x) => (x.toolId === item.id));
              if (indexToolToRent !== -1) {
                const lastQty = formData.tools[indexToolToRent].quantity
                const tempForm = structuredClone(formData);
                if (lastQty > updatedStock) {
                  tempForm.tools[indexToolToRent].quantity = updatedStock
                  setFormData(tempForm);
                }
                // if quantity < 1 , delete the object from array 
                if (lastQty < 1) {
                  tempForm.tools.splice(indexToolToRent, 1);
                  setFormData(tempForm);
                }
              }
              return (
                <ToolCard key={item.id} tool={{
                  ...item,
                  totalStock: updatedStock
                }} formData={formData} setFormData={setFormData} />

              )
            })
          }
        </>}

      </div>
      {error.tools && (
        <div
          className="bg-red-100 border mb-3 mx-2 border-red-400 text-red-700 px-4 py-3 rounded relative w-full"
          role="alert"
        >
          <span className="block text-center">{error.tools}</span>
        </div>
      )}
    </>
  );
};

export default Step3;

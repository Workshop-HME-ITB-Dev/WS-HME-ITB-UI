import { useQuery } from '@apollo/client';
import axios from 'axios';
import moment from 'moment';
import { useEffect, useState } from 'react';
import AlertCard from '../../dashboard/basiccomponent/AlertCard';
import { AlertData } from '../../dashboard/basiccomponent/basic.types';
import Spinner from '../../Spinner';
import { RentRestricted, StepProps, Tool, ToolRent } from '..//rent.types';
import ToolCard from './ToolCard';

const Step3 = ({
  formData,
  setFormData,
  error,
  setError
}: StepProps): JSX.Element => {

  const [loading, setLoading] = useState<boolean>(true);
  const [showAlert, setShowAlert] = useState<boolean>(true);
  const [alert, setAlert] = useState<null | AlertData>(null);



  const [rents, setRents] = useState<RentRestricted[]>([]);
  const [tools, setTools] = useState<Tool[]>([]);
  const refreshData = async () => {
    setLoading(true);
    try {
      const fetchRentsData = await axios.get(process.env.REACT_APP_API_HOST_URL + '/restrict/rents');
      const fetchToolsData = await axios.get(process.env.REACT_APP_API_HOST_URL + '/tools');

      if (fetchRentsData.data.data && fetchToolsData.data.data) {
        setRents(fetchRentsData.data.data)
        setTools(fetchToolsData.data.data)
        setLoading(false);
      }
    } catch (e: any) {
      console.error(e.message);
      setAlert({
        title: 'ERROR',
        desc: e.message,
        type: 'error'
      })
      setShowAlert(true);
    }
  }
  useEffect(() => {
    refreshData();
  }, []);
  return (
    <>
      {showAlert && alert && <AlertCard data={alert} onClose={setShowAlert} />}

      <div className="flex flex-wrap justify-center items-start w-full px-4 py-2">
        {loading ? <Spinner color='text-ws-orange' /> : <>
          {
            tools?.filter((item) => item.totalStock > 0 && item.activated).map((item) => {
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
              const rentDataFiltered = rents?.filter(x => (x.status === 'waiting_pickup' || x.status === 'waiting_return'));
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

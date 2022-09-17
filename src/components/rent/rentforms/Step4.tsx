import { useLazyQuery, useQuery } from '@apollo/client';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { calculateBetweenTwoDate, calculatePrices, numberToIDR } from '../../../utils/utils';
import { GetToolsResponse } from '../../../graphql/toolQuery.types';
import { GET_TOOLS } from '../../../graphql/toolsQuery';
import AlertCard from '../../dashboard/basiccomponent/AlertCard';
import Spinner from '../../Spinner';
import { StepProps, Tool } from '..//rent.types';

const Step4 = ({
  formData,
  setFormData,
  error,
  setError
}: StepProps): JSX.Element => {
  const [getTools, { loading: gqlToolsLoading, error: gqlToolsError, data: gqlToolsData }] = useLazyQuery<GetToolsResponse>(GET_TOOLS, { fetchPolicy: 'cache-and-network' });
  const [showAlert, setShowAlert] = useState<boolean>(true);
  const pickupDate = new Date(formData.pickupDate);
  pickupDate.setHours(Number(formData.pickupHour));
  pickupDate.setMinutes(Number(formData.pickupMinute));
  const returnDate = new Date(formData.returnDate);
  returnDate.setHours(Number(formData.returnHour));
  returnDate.setMinutes(Number(formData.returnMinute));
  const [days, hours] = calculateBetweenTwoDate(pickupDate, returnDate);

  const refreshData = async () => {
    const toolsData = await getTools();
    if (!gqlToolsLoading && toolsData.data) {
      setFormData(formData => ({ ...formData, totalPrice: calculatePrices(formData.tools, toolsData.data?.tools as Tool[], days, hours) }))
    }
  }
  useEffect(() => {
    refreshData();
    console.log(formData);
    console.log(formData);

  }, [])

  return <>
    {error.totalPrice && (
      <div
        className="bg-red-100 border mb-3 mx-2 border-red-400 text-red-700 px-4 py-3 rounded relative w-80"
        role="alert"
      >
        <span className="block text-center">{error.totalPrice}</span>
      </div>
    )}
    {showAlert && gqlToolsError && <AlertCard data={{
      title: 'ERROR',
      desc: gqlToolsError.message,
      type: 'error'
    }} onClose={setShowAlert} />}

    {gqlToolsLoading ? <Spinner color='text-ws-orange' /> :
      <div className="overflow-x-auto overflow-x-hidden px-4">
        <table className="items-center w-full bg-transparent border-collapse mb-4">
          <thead>
            <tr>
              <th className="w-full px-2 text-gray-800 align-middle border-b border-solid border-ws-orange py-1 text-md whitespace-nowrap font-bold text-left">
                Information
              </th>
              <th className="w-2 px-2 text-gray-800 align-middle border-b border-solid border-ws-orange py-1 text-md whitespace-nowrap font-bold text-left">
              </th>
              <th className="w-40 px-2 text-gray-800 align-middle border-b border-solid border-ws-orange py-1 text-md whitespace-nowrap font-bold text-right">
                Value
              </th>
            </tr>
          </thead>
          <tbody>
            <tr key="name">
              <th key="nameInfo" className="border-b border-ws-orange align-middle font-normal text-sm whitespace-nowrap px-2 py-2 text-left">
                Name
              </th>
              <th key="nameColon" className="border-b border-ws-orange align-middle font-bold text-md whitespace-nowrap px-2 py-2 text-left">
                :
              </th>
              <th key="nameValue" className="border-b border-ws-orange align-middle font-normal text-sm whitespace-nowrap px-2 py-2 text-right">
                {formData.name}
              </th>
            </tr>
            <tr key="nim">
              <th key="nimInfo" className="border-b border-ws-orange align-middle font-normal text-sm whitespace-nowrap px-2 py-2 text-left">
                NIM
              </th>
              <th key="nimColon" className="border-b border-ws-orange align-middle font-bold text-md whitespace-nowrap px-2 py-2 text-left">
                :
              </th>
              <th key="nimValue" className="border-b border-ws-orange align-middle font-normal text-sm whitespace-nowrap px-2 py-2 text-right">
                {formData.nim}
              </th>
            </tr>
            <tr key="organisation">
              <th key="organisationInfo" className="border-b border-ws-orange align-middle font-normal text-sm whitespace-nowrap px-2 py-2 text-left">
                Organisation
              </th>
              <th key="organisationColon" className="border-b border-ws-orange align-middle font-bold text-md whitespace-nowrap px-2 py-2 text-left">
                :
              </th>
              <th key="organisationValue" className="border-b border-ws-orange align-middle font-normal text-sm whitespace-nowrap px-2 py-2 text-right">
                {formData.organisation}
              </th>
            </tr>
            <tr key="phone">
              <th key="phoneInfo" className="border-b border-ws-orange align-middle font-normal text-sm whitespace-nowrap px-2 py-2 text-left">
                Phone
              </th>
              <th key="phoneColon" className="border-b border-ws-orange align-middle font-bold text-md whitespace-nowrap px-2 py-2 text-left">
                :
              </th>
              <th key="phoneValue" className="border-b border-ws-orange align-middle font-normal text-sm whitespace-nowrap px-2 py-2 text-right">
                {formData.phone}
              </th>
            </tr>
            <tr key="line">
              <th key="lineInfo" className="border-b border-ws-orange align-middle font-normal text-sm whitespace-nowrap px-2 py-2 text-left">
                Line ID
              </th>
              <th key="lineColon" className="border-b border-ws-orange align-middle font-bold text-md whitespace-nowrap px-2 py-2 text-left">
                :
              </th>
              <th key="lineValue" className="border-b border-ws-orange align-middle font-normal text-sm whitespace-nowrap px-2 py-2 text-right">
                {formData.line}
              </th>
            </tr>
            <tr key="pickupDate">
              <th key="pickupInfo" className="border-b border-ws-orange align-middle font-normal text-sm whitespace-nowrap px-2 py-2 text-left">
                Waktu Pengambilan
              </th>
              <th key="pickupColon" className="border-b border-ws-orange align-middle font-bold text-md whitespace-nowrap px-2 py-2 text-left">
                :
              </th>
              <th key="pickupValue" className="border-b border-ws-orange align-middle font-normal text-sm whitespace-nowrap px-2 py-2 text-right">
                {moment(formData.pickupDate).format("DD-MM-YYYY") + ' ' + String(formData.pickupHour).padStart(2, '0') + ':' + String(formData.pickupMinute).padStart(2, '0') + ' WIB'}
              </th>
            </tr>
            <tr key="returnDate">
              <th key="returnInfo" className="border-b border-ws-orange align-middle font-normal text-sm whitespace-nowrap px-2 py-2 text-left">
                Waktu Pengembalian
              </th>
              <th key="returnColon" className="border-b border-ws-orange align-middle font-bold text-md whitespace-nowrap px-2 py-2 text-left">
                :
              </th>
              <th key="returnValue" className="border-b border-ws-orange align-middle font-normal text-sm whitespace-nowrap px-2 py-2 text-right">
                {moment(formData.returnDate).format("DD-MM-YYYY") + ' ' + String(formData.returnHour).padStart(2, '0') + ':' + String(formData.returnMinute).padStart(2, '0') + ' WIB'}
              </th>
            </tr>
            <tr key="duration">
              <th key="durationInfo" className="border-b border-ws-orange align-middle font-normal text-sm whitespace-nowrap px-2 py-2 text-left">
                Durasi Peminjaman
              </th>
              <th key="durationColon" className="border-b border-ws-orange align-middle font-bold text-md whitespace-nowrap px-2 py-2 text-left">
                :
              </th>
              <th key="durationValue" className="border-b border-ws-orange align-middle font-normal text-sm whitespace-nowrap px-2 py-2 text-right">
                {`${days} Hari ${hours} Jam `}
              </th>
            </tr>
            <tr key="tools">
              <th key="toolsInfo" className="border-b border-ws-orange align-middle font-normal text-sm whitespace-nowrap px-2 py-2 text-left">
                Barang
              </th>
              <th key="toolsColon" className="border-b border-ws-orange align-middle font-bold text-md whitespace-nowrap px-2 py-2 text-left">
                :
              </th>
              <th key="toolsValue" className="border-b border-ws-orange align-middle font-normal text-sm whitespace-nowrap px-2 py-2 text-right">
                <ul>
                  {formData.tools.map(tool => {
                    const findTool = gqlToolsData?.tools.find(x => x.id === tool.toolId)
                    if (!findTool) {
                      return <></>
                    }
                    return (<li className='w-auto' key={tool.toolId}>
                      {findTool.name.length > 24 ? findTool.name.substring(0, 24) + '..'
                        : findTool.name}{" "}
                      <span className='font-bold'>
                        {tool.quantity}</span>{" pcs"}</li>)
                  })}
                </ul>
              </th>
            </tr>
            <tr key="price">
              <th key="priceInfo" className="border-b border-ws-orange align-middle font-normal text-sm whitespace-nowrap px-2 py-2 text-left">
                Harga Total
              </th>
              <th key="priceColon" className="border-b border-ws-orange align-middle font-bold text-md whitespace-nowrap px-2 py-2 text-left">
                :
              </th>
              <th key="priceValue" className="border-b border-ws-orange align-middle font-normal text-sm whitespace-nowrap px-2 py-2 text-right">
                {gqlToolsData && numberToIDR(calculatePrices(formData.tools, gqlToolsData.tools, days, hours))}
              </th>
            </tr>
          </tbody>
        </table>
      </div>

    }
  </>;
};

export default Step4;

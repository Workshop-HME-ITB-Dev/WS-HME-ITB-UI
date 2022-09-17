import { StepProps } from '../rent.types';
import { range } from '../../../utils/utils';
import moment from 'moment';

const Step2 = ({
  formData,
  setFormData,
  error,
  setError,
}: StepProps): JSX.Element => {
  const onChange = (e: any): void => {
    if (e.target.name === 'pickupDate') {
      if (moment(e.target.value).isAfter(formData.returnDate)) {
        setFormData((formData) => ({ ...formData, returnDate: e.target.value }))
      }
    }
    setFormData((formData) => ({ ...formData, [e.target.name]: e.target.value }));

  };
  return (
    <>
      {/* Pickup Date */}
      <div className="flex flex-col items-center gap-2 mt-4 py-2">
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="pickupDate"
          >
            Tanggal Peminjaman
          </label>
          <input
            name="pickupDate"
            id="pickupDate"
            type="date"
            value={formData.pickupDate}
            onChange={(e) => {
              onChange(e);
            }}
            className="bg-gray-50 border border-gray-300 placeholder:font-sans
                text-gray-800 sm:text-sm rounded-lg  focus:border-ws-orange focus:ring-ws-orange block w-56 p-2"
            placeholder="Select date start"
          />
        </div>
        {/* Pickup Time */}
        <div className="flex flex-row mt-2">
          <div className="w-24 mr-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="pickupHour"
            >
              Jam Peminjaman
            </label>
            <select
              id="pickupHour"
              name="pickupHour"
              value={formData.pickupHour}
              onChange={(e) => {
                onChange(e);
              }}
              className="form-select appearance-none
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding bg-no-repeat
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-label="Default select example"
            >
              {hourList.map((hour) => (
                <option key={hour} value={hour}>
                  {String(hour).padStart(2, '0')}
                </option>
              ))}
            </select>
          </div>
          <div className="w-24 ml-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="pickupMinute"
            >
              Menit Peminjaman
            </label>
            <select
              id="pickupMinute"
              name="pickupMinute"
              value={formData.pickupMinute}
              onChange={(e) => {
                onChange(e);
              }}
              className="form-select appearance-none
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding bg-no-repeat
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-label="Default select example"
            >
              {minuteList.map((minute) => (
                <option key={minute} value={minute}>
                  {String(minute).padStart(2, '0')}
                </option>
              ))}
            </select>
          </div>
        </div>
        {error.pickupDate && (
          <span className="text-sm text-red-600 mt-2">{error.pickupDate}</span>
        )}
        {/* ReturnDate */}
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="returnDate"
          >
            Tanggal Pengembalian
          </label>
          <input
            name="returnDate"
            id="returnDate"
            type="date"
            value={formData.returnDate}
            onChange={(e) => {
              onChange(e);
            }}
            className="bg-gray-50 border border-gray-300 placeholder:font-sans
                text-gray-800 sm:text-sm rounded-lg  focus:border-ws-orange focus:ring-ws-orange block w-56 p-2"
            placeholder="Select date start"
          />
        </div>
        {/* Return time  */}
        <div className="flex flex-row mb-1 mt-2">
          <div className="w-24 mr-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="returnHour"
            >
              Jam Pengembalian
            </label>
            <select
              id="returnHour"
              name="returnHour"
              value={formData.returnHour}
              onChange={(e) => {
                onChange(e);
              }}
              className="form-select appearance-none
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding bg-no-repeat
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-label="Default select example"
            >
              {hourList.map((hour) => (
                <option key={hour} value={hour}>
                  {String(hour).padStart(2, '0')}
                </option>
              ))}
            </select>
          </div>
          <div className="w-24 ml-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="returnMinute"
            >
              Menit Pengembalian
            </label>
            <select
              id="returnMinute"
              name="returnMinute"
              value={formData.returnMinute}
              onChange={(e) => {
                onChange(e);
              }}
              className="form-select appearance-none
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding bg-no-repeat
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-label="Default select example"
            >
              {minuteList.map((minute) => (
                <option key={minute} value={minute}>
                  {String(minute).padStart(2, '0')}
                </option>
              ))}
            </select>
          </div>
        </div>
        {error.returnDate && (
          <span className="text-sm text-red-600 mb-2">{error.returnDate}</span>
        )}
      </div>
    </>
  );
};

const hourList = range(6, 18);
const minuteList = range(0, 60, 15);
export default Step2;

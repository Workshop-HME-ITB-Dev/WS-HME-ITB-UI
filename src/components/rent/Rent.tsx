import { useEffect, useState } from 'react';
import { getCurrentDateFormatted } from '../../utils/utils';
import Footer from '../Footer';
import NavBar from '../Navbar';
import { RentFormData, RentFormError } from './rent.types';
import Step1 from './rentforms/Step1';
import Step2 from './rentforms/Step2';
import Step3 from './rentforms/Step3';
import Step4 from './rentforms/Step4';
import StepFinished from './rentforms/StepFinished';
import StepRent from './StepRent';
import moment from 'moment';
import ModalPanduan from './ModalPanduan';
import { validateRentFormError } from '../../utils/rentFormValidator';
import AlertCard from '../dashboard/basiccomponent/AlertCard';
import { CreateRentInput } from '../../graphql/rentQuery.types';
import axios from 'axios';
import { configCreator } from '../../utils/configCreator';
import { AlertData } from '../dashboard/basiccomponent/basic.types';

const Rent = (): JSX.Element => {
  const [showAlert, setShowAlert] = useState<boolean>(true);
  const [alert, setAlert] = useState<null | AlertData>(null);

  const [showModal, setShowModal] = useState<boolean>(false);
  const [step, setStep] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [formError, setFormError] = useState<RentFormError>(defaultError);
  const [formData, setFormData] = useState<RentFormData>({
    name: '',
    nim: '',
    organisation: '',
    phone: '',
    line: '',
    pickupDate: moment(getCurrentDateFormatted()).format('YYYY-MM-DD'),
    pickupHour: 6,
    pickupMinute: 0,
    returnDate: moment(getCurrentDateFormatted()).format('YYYY-MM-DD'),
    returnHour: 6,
    returnMinute: 0,
    tools: [],
    totalPrice: 0,
  });
  const submitForm = async (): Promise<any> => {
    const pickupDate = new Date(formData.pickupDate);
    pickupDate.setHours(formData.pickupHour);
    pickupDate.setMinutes(formData.pickupMinute);
    const returnDate = new Date(formData.returnDate);
    returnDate.setHours(formData.returnHour);
    returnDate.setMinutes(formData.returnMinute);
    setLoading(true);

    try {
      const variables: CreateRentInput = {
        tools: JSON.stringify(formData.tools),
        rentName: formData.name,
        rentNim: formData.nim,
        rentPhone: formData.phone,
        rentLineId: formData.line,
        organisation: formData.organisation,
        fromDate: pickupDate.toISOString(),
        expectedReturnDate: returnDate.toISOString(),
        status: 'waiting_pickup',
        totalPrice: formData.totalPrice
      }
      const rent = await axios.post(process.env.REACT_APP_API_HOST_URL + '/rents', variables, configCreator());

      await new Promise(r => setTimeout(r, 500));
      // if success
      if (rent.data.data) {
        setStep(4);
      }
    }
    catch (e: any) {
      console.error(e.message);
      setAlert({
        title: 'ERROR',
        desc: e.message,
        type: 'error'
      })
      setShowAlert(true);
    }
    setLoading(false);
  };
  const interceptValidation = () => {
    const { error, result } = validateRentFormError(step, formData);
    if (error) {
      setFormError(result)
    }
    return error;
  }
  const nextStep = () => {
    console.log(formData);
    if (interceptValidation()) {
      return
    }
    if (step === 3) {
      submitForm();
    }
    setStep((step) => (step < 3 ? step + 1 : step));
  };
  const prevStep = () => {
    setFormError(defaultError);
    setStep((step) => (step > 0 ? step - 1 : step));
  };
  const pingServer = async () => {
    await axios.get("http://wshme.herokuapp.com/api");
  }
  useEffect(() => {
    // Ping to avoid cold start - temp solution 
    try {
      pingServer()
    }
    catch (e: any) {
      console.error(e.message);
    }
  }, []);
  return (
    <>
      <div className="flex flex-col min-h-screen justify-start bg-ws-orange">
        <NavBar selected="rent" />
        <main className="flex h-full w-full mb-auto">
          <ModalPanduan showModal={showModal} setShowModal={setShowModal} />
          {showAlert && alert && <AlertCard data={alert} onClose={setShowAlert} />}

          <div className="flex flex-col max-w-7xl justify-start mx-auto px-6">
            <h1 className="font-sans text-4xl font-semibold text-gray-800 mx-auto mt-4 mb-4">
              Rent
            </h1>
            <h2 className="font-sans text-lg text-gray-800 text-justify max-w-3xl mx-auto">
              Workshop HME menyediakan berbagai macam peralatan untuk melengkapi
              kebutuhan kegiatan maupun acara anda.
            </h2>
            <section className="container max-w-7xl bg-slate-50 rounded-lg my-4">
              <div className="flex flex-col justify-start items-center my-4 relative w-full">
                <h2 className="font-sans font-semibold text-gray-800 text-xl">
                  Form Peminjaman Alat
                </h2>
                {step === 4 ? (
                  <StepFinished />
                ) : (
                  <>
                    <div className="flex ml-10 mr-8 mb-4 mt-10">
                      <StepRent step={step} />
                    </div>
                    <hr />
                    <div className="flex flex-col justify-between items-center mb-2 w-full">
                      {step === 0 && (
                        <Step1
                          formData={formData}
                          setFormData={setFormData}
                          error={formError}
                          setError={setFormError}
                        />
                      )}
                      {step === 1 && (
                        <Step2
                          formData={formData}
                          setFormData={setFormData}
                          error={formError}
                          setError={setFormError}
                        />
                      )}
                      {step === 2 && (
                        <Step3
                          formData={formData}
                          setFormData={setFormData}
                          error={formError}
                          setError={setFormError}
                        />
                      )}
                      {step === 3 && (
                        <Step4
                          formData={formData}
                          setFormData={setFormData}
                          error={formError}
                          setError={setFormError}
                        />
                      )}
                    </div>
                  </>
                )}

                {step !== 4 && (
                  <>
                    <div className="flex flex-row justify-center items-end my-2 gap-7">
                      <button disabled={loading}
                        onClick={() => {
                          prevStep();
                        }}
                        className={`${step === 0 && 'invisible '
                          } bg-ws-orange text-gray-800 hover:text-gray-50 font-bold py-2 px-4 rounded-lg`}
                      >
                        Previous
                      </button>
                      <button
                        onClick={() => {
                          nextStep();
                        }}
                        className={` bg-ws-orange text-gray-800 hover:text-gray-50 font-bold py-2 px-4 rounded-lg`}
                      >
                        {step < 3 && 'Next'}
                        {step === 3 && !loading && 'Submit'}
                        {step === 3 && loading && <div className='flex flex-row'>
                          <svg className='w-4 animation animate-spin' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill='currentColor' d="M304 48C304 74.51 282.5 96 256 96C229.5 96 208 74.51 208 48C208 21.49 229.5 0 256 0C282.5 0 304 21.49 304 48zM304 464C304 490.5 282.5 512 256 512C229.5 512 208 490.5 208 464C208 437.5 229.5 416 256 416C282.5 416 304 437.5 304 464zM0 256C0 229.5 21.49 208 48 208C74.51 208 96 229.5 96 256C96 282.5 74.51 304 48 304C21.49 304 0 282.5 0 256zM512 256C512 282.5 490.5 304 464 304C437.5 304 416 282.5 416 256C416 229.5 437.5 208 464 208C490.5 208 512 229.5 512 256zM74.98 437C56.23 418.3 56.23 387.9 74.98 369.1C93.73 350.4 124.1 350.4 142.9 369.1C161.6 387.9 161.6 418.3 142.9 437C124.1 455.8 93.73 455.8 74.98 437V437zM142.9 142.9C124.1 161.6 93.73 161.6 74.98 142.9C56.24 124.1 56.24 93.73 74.98 74.98C93.73 56.23 124.1 56.23 142.9 74.98C161.6 93.73 161.6 124.1 142.9 142.9zM369.1 369.1C387.9 350.4 418.3 350.4 437 369.1C455.8 387.9 455.8 418.3 437 437C418.3 455.8 387.9 455.8 369.1 437C350.4 418.3 350.4 387.9 369.1 369.1V369.1z" />
                          </svg>
                          <span className='ml-2'>
                            Processing...
                          </span>
                        </div>}
                      </button>
                    </div>
                    <div className="flex justify-center items-end mt-2">
                      <button onClick={() => { setShowModal(true); }} disabled={loading} className=" bg-gray-300 text-gray-800 hover:text-gray-100 font-bold py-2 px-4 rounded-lg">
                        Panduan Peminjaman
                      </button>
                    </div>
                  </>
                )}
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Rent;

const defaultError = {
  name: '',
  nim: '',
  organisation: '',
  phone: '',
  line: '',
  pickupDate: '',
  returnDate: '',
  tools: '',
  totalPrice: ''
};
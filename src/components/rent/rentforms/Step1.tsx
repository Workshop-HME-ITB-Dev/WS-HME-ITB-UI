import { StepProps } from '../rent.types';

const Step1 = ({
  formData,
  setFormData,
  error,
  setError,
}: StepProps): JSX.Element => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form className="rounded px-8 pt-4 pb-1">
        {/* name */}
        <div className="flex flex-col mb-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="nama"
          >
            Nama
          </label>
          <input
            className="w-56 shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="nama"
            type="text"
            placeholder="John Doe"
            name="name"
            value={formData.name}
            onChange={(e) => onChange(e)}
          />
          {error.name && (
            <span className="text-sm text-red-600 mt-2">{error.name}</span>
          )}
        </div>
        {/* nim */}
        <div className="flex flex-col mb-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="nim"
          >
            NIM
          </label>
          <input
            className="w-56 shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="nim"
            type="text"
            placeholder="13218000"
            name="nim"
            value={formData.nim}
            onChange={(e) => onChange(e)}
          />
          {error.nim && (
            <span className="text-sm text-red-600 mt-2">{error.nim}</span>
          )}
        </div>
        {/* organisation */}
        <div className="flex flex-col mb-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="organisation"
          >
            Organisation
          </label>
          <input
            className="w-56 shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="organisation"
            type="text"
            placeholder="HME"
            name="organisation"
            value={formData.organisation}
            onChange={(e) => onChange(e)}
          />
          {error.organisation && (
            <span className="text-sm text-red-600 mt-2">
              {error.organisation}
            </span>
          )}
        </div>
        {/* phone */}
        <div className="flex flex-col mb-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="phone"
          >
            Phone / WA
          </label>
          <input
            className="w-56 shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            type="text"
            placeholder="087734788203"
            name="phone"
            value={formData.phone}
            onChange={(e) => onChange(e)}
          />
          {error.phone && (
            <span className="text-sm text-red-600 mt-2">{error.phone}</span>
          )}
        </div>
        {/* line */}
        <div className="flex flex-col mb-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="line"
          >
            Line ID
          </label>
          <input
            className="w-56 shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="line"
            type="text"
            placeholder="exampleLineId123"
            name="line"
            value={formData.line}
            onChange={(e) => onChange(e)}
          />
          {error.line && (
            <span className="text-sm text-red-600 mt-2">{error.line}</span>
          )}
        </div>
      </form>
    </>
  );
};

export default Step1;

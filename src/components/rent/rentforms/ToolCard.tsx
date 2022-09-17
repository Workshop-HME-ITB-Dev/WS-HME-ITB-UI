import { numberToIDR } from '../../../utils/utils';
import { RentFormData, Tool, ToolRent } from '../rent.types';

const ToolCard = ({
  tool,
  formData,
  setFormData,
}: ToolCardProps): JSX.Element => {
  const data = formData.tools.find((x) => x.toolId === tool.id);
  const addQuantity = (): void => {
    const findIndex = formData.tools.findIndex((x) => x.toolId === tool.id);
    const tools: ToolRent[] = structuredClone(formData.tools); // deep clone
    if (findIndex !== -1) {
      // found, increment existing object
      tools[findIndex].quantity += 1;
    } else {
      // not found, add the object with qty 1
      tools.push({
        toolId: tool.id,
        quantity: 1,
      });
    }
    setFormData({ ...formData, tools: tools.filter((item) => (Number(item.quantity) !== 0)) });
  };
  const minusQuantity = (): void => {
    const findIndex = formData.tools.findIndex((x) => x.toolId === tool.id);
    const tools: ToolRent[] = structuredClone(formData.tools); // deep clone
    if (findIndex !== -1) {
      // exist, decrement existing object
      tools[findIndex].quantity -= 1;
      // check if qty is 0 now, if yes, then remove the obj from tools
      setFormData({ ...formData, tools: tools.filter((item) => (Number(item.quantity) !== 0)) });
    }
  };
  return (
    <>
      <div className="flex px-2 py-4 sm:py-3 sm:px-3 lg:px-8 basis-1/2 sm:basis-1/3 md:basis-1/4">
        <div className="flex flex-col bg-slate-50 w-full h-full rounded-xl shadow-lg">
          <img
            className="h-[115px] object-cover rounded-t-xl border-b-4 border-ws-orange"
            src={tool.image}
            alt={tool.name}
          />
          <div className="flex flex-col justify-between p-2 w-full max-w-xl">
            <h2 className="font-sans text-sm font-bold mb-1 mx-auto">
              {tool.name.length > 40
                ? tool.name.substring(0, 40) + '...'
                : tool.name}
            </h2>
            <p className="font-sans text-sm mx-auto">
              {numberToIDR(tool.priceHour)} /jam
            </p>
            <p className="font-sans text-sm mx-auto">
              {numberToIDR(tool.priceDay)} /hari
            </p>
            <div className="flex flex-row justify-between items-end mx-1 mt-1 mb-2">
              {/* logo - */}
              <div
                className={`${data && data.quantity > 0 ? 'visible' : 'invisible'
                  }`}
              >
                <svg
                  className="text-red-600 w-8 hover:cursor-pointer hover:text-red-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  onClick={() => {
                    minusQuantity();
                  }}
                >
                  <path
                    fill="currentColor"
                    d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM168 232C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H168z"
                  />
                </svg>
              </div>

              {/* qty */}
              <input
                className="text-md text-center w-10 shadow appearance-none border rounded-lg py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="line"
                type="text"
                pattern="[0-9]*"
                name="line"
                value={data ? data.quantity : 0}
                readOnly
              />
              {/* logo + */}
              <div
                className={`${!data || (data && data.quantity < tool.totalStock)
                  ? 'visible'
                  : 'invisible'
                  }`}
              >
                <svg
                  className="text-green-500 w-8 hover:cursor-pointer hover:text-green-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  onClick={() => {
                    addQuantity();
                  }}
                >
                  <path
                    fill="currentColor"
                    d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 368C269.3 368 280 357.3 280 344V280H344C357.3 280 368 269.3 368 256C368 242.7 357.3 232 344 232H280V168C280 154.7 269.3 144 256 144C242.7 144 232 154.7 232 168V232H168C154.7 232 144 242.7 144 256C144 269.3 154.7 280 168 280H232V344C232 357.3 242.7 368 256 368z"
                  />
                </svg>
              </div>
            </div>
            <p className="font-sans font-semibold text-sm mx-auto my-1">
              Stock: {tool.totalStock < 0 ? 0 : tool.totalStock}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

interface ToolCardProps {
  tool: Tool;
  formData: RentFormData;
  setFormData: Function;
}

export default ToolCard;

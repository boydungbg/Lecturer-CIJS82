import { Link } from "react-router-dom";
import Input from "../components/input/input";

function Register() {
  return (
    <div>
      <div className="flex justify-center items-center h-[100vh] overflow-auto">
        <div className="w-[500px] bg-gray-200 rounded-lg">
          <div className="p-10">
            <h3 className="text-3xl text-center">Register </h3>
            <div className="my-5">
              <form>
                <div className="flex flex-col	gap-y-[20px]">
                  <div>
                    <Input label={"Ten tai khoan"} id={"user_name"} />
                  </div>
                  <div>
                    <Input label={"Full name"} />
                  </div>
                  <div>
                    <Input label={"Phone number"} />
                  </div>
                  <div>
                    <Input label={"Password"} />
                  </div>
                  <div>
                    <Input label={"Password Confirm"} />
                  </div>
                  <button className="p-3 w-full bg-[#fcba03]">Dang ky</button>
                </div>
              </form>
            </div>
            <p>
              Neu ban co tai khoan? hay <Link to="/sign-in">Dang nhap</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;

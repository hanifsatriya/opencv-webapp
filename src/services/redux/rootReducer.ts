import counterReducer from "@/services/redux/CounterSlice";
import LoadingReducer from "@/services/redux/LoadingSlice";
import PayrollReducer from "@/services/redux/PayrollSlice";
import ManagementUserReducer from "@/services/redux/ManagemenUserSlice";
import CompanyReducer from "@/services/redux/CompanySlice";

const rootReducer = {
  counter: counterReducer,
  loadingRedux: LoadingReducer,
  payroll: PayrollReducer,
  managemenUser: ManagementUserReducer,
  company: CompanyReducer,
};

export default rootReducer;

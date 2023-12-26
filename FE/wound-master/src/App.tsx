import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {
    AdminBoard,
    CMSOperatoriPage,
    CMSPage,
    CMSPazientiPage,
    CMSVisitePage,
    LoginPage, OperatorBoard,
    UiKit,
    WoundMasterPage
} from "./pages";
import {NavBar, PrivateRoute} from '@/shared/index';
import {Human} from "./template/Human";
import {Patients} from "./pages/admin/patientsPage/Patients";
import {Visits} from "./pages/operator/visitePage/Visits";
import {Operators} from "./pages/admin/operatorsPage/Operators";
import {PatientPage} from "./pages/operator/patientsPage/PatientPage";




function App() {


  return (
      <BrowserRouter>
          <NavBar/>
          <hr/>
          <div className="page">
              <Routes>
                  <Route path="woundmaster" element={<WoundMasterPage/>}/>
                  <Route path="uikit" element={<UiKit/>}/>
                  <Route path="human" element={<Human/>}/>
                  <Route path="login" element={<LoginPage/>}/>

                  <Route path="admin-board" element={<PrivateRoute><AdminBoard/></PrivateRoute>}>
                      <Route path="patients" element={<Patients/>}/>
                      <Route path="operators" element={<Operators/>}/>
                      <Route index element={<Navigate to="operators"/> }/>
                  </Route>

                  <Route path="operator-board" element={<PrivateRoute><OperatorBoard/></PrivateRoute>}>
                      <Route path="patients" element={<PatientPage/>}/>
                      <Route path="visits" element={<Visits/>}/>
                      <Route index element={<Navigate to="patients"/> }/>
                  </Route>


                  <Route path="cms" element={<CMSPage/>}>
                      <Route path="operatori" element={<CMSOperatoriPage/>}/>
                      <Route path="pazienti" element={<CMSPazientiPage/>}/>
                      <Route path="visite" element={<CMSVisitePage/>}/>
                      <Route index element={<Navigate to="operatori"/> }/>
                  </Route>

                  <Route path="*" element={<Navigate to="woundmaster"/> }/>
              </Routes>

          </div>
      </BrowserRouter>

  )
}

export default App

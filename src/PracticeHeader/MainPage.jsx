import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Navbar from "./Navbar";
import Login from "./Login";
import Page404 from "./Page404";
import Collage from "./Collage";
import CollageStudent from "./CollageStudent";
import CollageDepartment from "./CollageDepartment";
import CollageDetail from "./CollageDetail";
import UserList from "./UserList";
import UserDetailed from "./UserDetailed";
import UserAdd from "./UserAdd";

const MainPage = () => {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        

        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/addUser" element={<UserAdd />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/userlist/list?" element={<UserList />} />
          
          <Route path="/users/:id" element={<UserDetailed />} />
        </Route>
        <Route path="/collage" element={<Collage />}>
          <Route  index element={<CollageStudent />} />
          <Route path="department" element={<CollageDepartment />} />
          <Route path="details" element={<CollageDetail />} />
        </Route>
        {/* <Route path='/*' element={<Page404 />} />  */}
        {/* Remeber that to add only last any any place not first only add last  */}
        <Route path="/*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainPage;

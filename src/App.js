import "./App.css";
import Homepage from "./pages/home_page";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/signup";
import Userlogin from "./pages/user_login";
import Adminlogin from "./pages/admin_login";
import Adminhome from "./pages/admin_home";
import Addtheater from "./pages/add_theater";
import Addshow from "./pages/add_show";
import Addmovie from "./pages/add_movie";
import Viewtheater from "./pages/view_theater";
import Viewshow from "./pages/view_show";
import Viewmovie from "./pages/view_movie";
import Deletetheater from "./pages/delete_theater";
import Deleteshow from "./pages/delete_show";
import Deletemovie from "./pages/delete_movie";
import Updatetheater from "./pages/update_theater";
import Updateshow from "./pages/update_show";
import Updatemovie from "./pages/update_movie";
import Editmovie from "./pages/edit_movie";
import Editshow from "./pages/edit_show";
import Edittheater from "./pages/edit_theater";
import Userhomepage from "./pages/userhomepage";
import Userprofile from "./pages/user_profile";
import Userviewmovie from "./pages/userviewmovies";
import Bookingform from "./pages/booking_form";
import { Seatselection } from "./pages/selectSeat";
import { Bookingdetails } from "./pages/booking_details";
import { Mybookings } from "./pages/mybookings";

function App() {
  return (
    <div className="App" >
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/userlogin" element={<Userlogin />} />
        <Route path="/adminlogin" element={<Adminlogin />} />
        <Route path="/adminhomepage" element={<Adminhome />} />
        <Route path="/addtheater" element={<Addtheater />} />
        <Route path="/addshow" element={<Addshow />} />
        <Route path="/addmovie" element={<Addmovie />} />
        <Route path="/viewtheater" element={<Viewtheater />} />
        <Route path="/viewshow" element={<Viewshow />} />
        <Route path="/viewmovie" element={<Viewmovie />} />
        <Route path="/deletetheater" element={<Deletetheater />} />
        <Route path="/deleteshow" element={<Deleteshow />} />
        <Route path="/deletemovie" element={<Deletemovie />} />
        <Route path="/updatetheater" element={<Updatetheater />} />
        <Route path="/updateshow" element={<Updateshow />} />
        <Route path="/updatemovie" element={<Updatemovie />} />
        <Route path="/editmovie" element={<Editmovie />} />
        <Route path="/editshow" element={<Editshow />} />
        <Route path="/edittheater" element={<Edittheater />} />
        <Route path="/userhomepage" element={<Userhomepage />} />
        <Route path="/userprofile" element={<Userprofile />} />
        <Route path="/userviewmovie" element={<Userviewmovie />} />
        <Route path="/bookingform" element={<Bookingform />} />
        <Route path="/seatselect" element={<Seatselection />} />
        <Route path="/bookingdetails" element={<Bookingdetails />} />
        <Route path="/mybookings" element={<Mybookings />} />
      </Routes>
    </div>
  );
}

export default App;

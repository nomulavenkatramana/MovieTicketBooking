import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/v1/user";
const API_USER_URL = "http://localhost:8080/api/v1/userdetail";
const API_GETMOVIEBYTHEATERNAME_URL =
  "http://localhost:8080/api/v1/getmoviebytheatername";
const API_THEATER_URL = "http://localhost:8080/api/v1/theater";
const API_SHOW_URL = "http://localhost:8080/api/v1/show";
const API_SHOWBYTHEATERIDANDMOVIEID_URL =
  "http://localhost:8080/api/v1/showbytheateridandmovieid";
const API_MOVIE_URL = "http://localhost:8080/api/v1/movie";
const API_BOOKING_URL = "http://localhost:8080/api/v1/data";
const API_BOOKEDSEATS_URL = "http://localhost:8080/api/v1/bookedseats";
const API_GETBOOKINGSBYEMAIL_URL =
  "http://localhost:8080/api/v1/getbookingsbyemail";
const API_DELETEBOOKING_URL =
  "http://localhost:8080/api/v1/deletebookingbyusername";
const API_GETSEATSBOOKED_URL = "http://localhost:8080/api/v1/getseatsbooked";
const API_DELETESEATNAMES_URL = "http://localhost:8080/api/v1/deleteseatnames";

class UserService {
  createAccount(user) {
    return axios.post(API_BASE_URL, user);
  }
  checkUser(password) {
    return axios.get(API_USER_URL + "/" + password);
  }
  getMovieByTheaterName(theatername) {
    return axios.get(API_GETMOVIEBYTHEATERNAME_URL + "/" + theatername);
  }
  getBookingsByEmail(email) {
    return axios.get(API_GETBOOKINGSBYEMAIL_URL + "/" + email);
  }
  addTheater(theater) {
    return axios.post(API_THEATER_URL, theater);
  }
  addShow(show) {
    return axios.post(API_SHOW_URL, show);
  }
  addBooking(data) {
    return axios.post(API_BOOKING_URL, data);
  }
  addBookedseats(bookedseats) {
    return axios.post(API_BOOKEDSEATS_URL, bookedseats);
  }
  addMovie(movie) {
    return axios.post(API_MOVIE_URL, movie);
  }
  getTheaters() {
    return axios.get(API_THEATER_URL);
  }
  getShows() {
    return axios.get(API_SHOW_URL);
  }
  getShowtimebytheaternameandmoviename(theaterid, movieid) {
    return axios.get(
      API_SHOWBYTHEATERIDANDMOVIEID_URL + "/" + theaterid,
      movieid
    );
  }
  getSeatsbooked(moviename) {
    return axios.get(API_GETSEATSBOOKED_URL + "/" + moviename, moviename);
  }
  getMovies() {
    return axios.get(API_MOVIE_URL);
  }
  deleteTheaters(id) {
    return axios.delete(API_THEATER_URL + "/" + id);
  }
  deleteShows(id) {
    return axios.delete(API_SHOW_URL + "/" + id);
  }
  deleteMovies(id) {
    return axios.delete(API_MOVIE_URL + "/" + id);
  }
  deleteBooking(username) {
    return axios.delete(API_DELETEBOOKING_URL + "/" + username);
  }
  deleteBookedseats(seatnames) {
    return axios.delete(API_DELETESEATNAMES_URL + "/" + seatnames);
  }
  updateTheater(theater, id) {
    return axios.put(API_THEATER_URL + "/" + id, theater);
  }
  updateShow(show, id) {
    return axios.put(API_SHOW_URL + "/" + id, show);
  }
  updateMovie(movie, id) {
    return axios.put(API_MOVIE_URL + "/" + id, movie);
  }
}

export default new UserService();

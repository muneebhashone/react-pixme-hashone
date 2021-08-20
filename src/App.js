import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home/home.component";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import DrinksOverview from "./pages/drinks-overview/drinks-overview.component";
import FlavoursOverview from "./pages/flavours-overview/flavours-overview.component";
import AllFlavours from "./pages/all-flavours/all-flavours.component";
import DrinkSingle from "./pages/drink-single/drink-single.component";
import Signup from "./pages/signup/signup.component";
import Login from "./pages/login/login.component";
import Recover from "./pages/recover/recover.component";
import Profile from "./pages/admin/profile/profile.component";
import Subscription from "./pages/admin/subscription/subscription.component";
import Wishlist from "./pages/admin/wishlist/wishlist.component";
import Reviews from "./pages/admin/reviews/reviews.component";
import Signout from "./pages/admin/signout/signout.component";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/pixme/">
          <Header variation="home" />
          <Home />
          <Footer variation="home" />
        </Route>
        <Route path="/flavours/:flavourId">
          <Header />
          <DrinkSingle />
          <Footer />
        </Route>
        <Route path="/drinks/flavour/:drinkId">
          <Header />
          <FlavoursOverview />
          <Footer />
        </Route>
        <Route path="/flavours/:flavourId">
          <Header />
          <DrinkSingle />
          <Footer />
        </Route>
        <Route path="/flavours">
          <Header />
          <AllFlavours />
          <Footer />
        </Route>
        <Route path="/drinks">
          <Header />
          <DrinksOverview />
          <Footer />
        </Route>
        <Route path="/pixme/signup">
          <Header />
          <Signup />
          <Footer />
        </Route>
        <Route path="/pixme/login">
          <Header />
          <Login />
          <Footer />
        </Route>
        <Route path="/pixme/recover">
          <Header />
          <Recover />
          <Footer />
        </Route>
        <Route path="/pixme/admin/subscription">
          <Header />
          <Subscription />
          <Footer />
        </Route>
        <Route path="/pixme/admin/wishlist">
          <Header />
          <Wishlist />
          <Footer />
        </Route>
        <Route path="/pixme/admin/reviews">
          <Header />
          <Reviews />
          <Footer />
        </Route>
        <Route path="/pixme/admin/signout">
          <Header />
          <Signout />
          <Footer />
        </Route>
        <Route path="/pixme/admin">
          <Header />
          <Profile />
          <Footer />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

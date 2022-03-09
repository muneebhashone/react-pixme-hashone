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
import PrivacyPolicy from "./pages/privacy-policy/privacy-policy.component";
import Recover from "./pages/recover/recover.component";
import Profile from "./pages/admin/profile/profile.component";
import Subscription from "./pages/admin/subscription/subscription.component";
import Wishlist from "./pages/admin/wishlist/wishlist.component";
import Reviews from "./pages/admin/reviews/reviews.component";
import Signout from "./pages/admin/signout/signout.component";
import Search from "./pages/search/search.component";
import AgeRestriction from "./components/age-restriction/age-restriction.component";
import { URL } from "./config";

function App() {
  return (
    <>
      <AgeRestriction />
      <BrowserRouter>
        <Switch>
          <Route exact path={URL || "/"}>
            <Header variation="home" />
            <Home />
            <Footer variation="home" />
          </Route>
          <Route path={`${URL}/flavours/:flavourId`}>
            <Header />
            <DrinkSingle />
            <Footer />
          </Route>
          <Route path={`${URL}/drinks/:drinkId`}>
            <Header />
            <FlavoursOverview />
            <Footer />
          </Route>
          <Route path={`${URL}/flavours`}>
            <Header />
            <AllFlavours />
            <Footer />
          </Route>
          <Route path={`${URL}/drinks`}>
            <Header />
            <DrinksOverview />
            <Footer />
          </Route>
          <Route path={`${URL}/search`}>
            <Header />
            <Search />
            <Footer />
          </Route>
          <Route path={`${URL}/signup`}>
            <Header />
            <Signup />
            <Footer />
          </Route>
          <Route path={`${URL}/login`}>
            <Header />
            <Login />
            <Footer />
          </Route>
          <Route path={`${URL}/recover`}>
            <Header />
            <Recover />
            <Footer />
          </Route>
          <Route path={`${URL}/customer/subscription`}>
            <Header />
            <Subscription />
            <Footer />
          </Route>
          <Route path={`${URL}/customer/wishlist`}>
            <Header />
            <Wishlist />
            <Footer />
          </Route>
          <Route path={`${URL}/customer/reviews`}>
            <Header />
            <Reviews />
            <Footer />
          </Route>
          <Route path={`${URL}/customer/signout`}>
            <Header />
            <Signout />
            <Footer />
          </Route>
          <Route path={`${URL}/customer`}>
            <Header />
            <Profile />
            <Footer />
          </Route>
          <Route path={`${URL}/privacy-policy`}>
            <Header />
            <PrivacyPolicy />
            <Footer />
          </Route>
          <Route path={`${URL}/terms-of-use`}>
            <Header />
            <Footer />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

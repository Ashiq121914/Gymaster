import Footer from "./Footer";
import SharedTopNavs from "./SharedTopNavs";

const Layout = (props) => (
    <div>
      <SharedTopNavs></SharedTopNavs>
      <div className="mt-4">
        {props.children}
      </div>
      <Footer></Footer>
    </div>
  );

  export default Layout;
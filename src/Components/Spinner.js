import vote from "../images/vote2.png";
export default function Spinner() {
  return (
    <div className="flex justify-center items-center h-screen">
      {/* <div className="flex w-36 jistify-center  items-center spin">
        <img src={vote} className="w-24 h-24" alt="spinner" />
      </div> */}
      <div class="section-center">
        <div class="section-path">
          <div class="globe">
            <div class="wrapper">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

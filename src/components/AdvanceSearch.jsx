import "react-widgets/styles.css";
import DropdownList from "react-widgets/DropdownList";
import DatePicker from "react-widgets/DatePicker";
import Combobox from "react-widgets/Combobox";
import NumberPicker from "react-widgets/NumberPicker";

function AdvanceSearch({ searchData, setsearchData }) {

  const handleInputChange = (field, value) => {
    setsearchData({ ...searchData, [field]: value });
  };

  console.log(searchData);

  return (
    <div className="container mt-5">
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="col-md-6 p-3"
            style={{
              backgroundColor: "#f5f7f6",
              boxShadow: "2px 2px 8px #dbdbdb",
              border: "2px solid #a8e3b8",
              borderRadius: "6px",
            }}
          >
            <div className="row mt-2">
              <div className="col text-center">
                <h3>Advance Search</h3>
              </div>
            </div>
            <form className="row g-3" >
              <div className="col-md-12">
                <label htmlFor="inputCity" className="form-label">
                  Postcode
                </label>
                <>
                  <Combobox
                    hideCaret
                    hideEmptyPopup
                    type="text"
                    name="postcode"
                    id="postcode"
                    value={searchData.postcode}
                    onChange={(value) => handleInputChange("postcode", value)}
                  />
                </>
              </div>
              <div className="col-12">
                <div className="row">
                  <div className="col-6">
                    <label htmlFor="inputStateType" className="form-label">
                      Type
                    </label>
                    <DropdownList
                      id="inputStateType"
                      data={["House", "Apartment", "Flat", "Townhouse"]}
                      value={searchData.type}
                      onChange={(value) => handleInputChange("type", value)}
                    />
                  </div>
                  <div className="col-6">
                    <label htmlFor="bedrooms" className="form-label">
                      Bedrooms
                    </label>
                    <NumberPicker
                      id="bedrooms"
                      min={0}
                      value={searchData.bedrooms}
                      onChange={(value) => handleInputChange("bedrooms", value)}
                    />
                  </div>
                </div>
              </div>
              <div className="col-12">
                <label htmlFor="fromDate" className="form-label">
                  Date From
                </label>
                <DatePicker
                  max={new Date()}
                  placeholder="m/dd/yy"
                  id="fromDate"
                  onChange={(value) => handleInputChange("fromDate", value)}
                  className="mb-2"
                />
                <label htmlFor="toDate" className="form-label">
                  Date To
                </label>
                <DatePicker
                  max={new Date()}
                  placeholder="m/dd/yy"
                  id="toDate"
                  onChange={(value) => handleInputChange("toDate", value)}
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputStartPrice" className="form-label">
                  Min Price
                </label>
                <NumberPicker
                  id="inputMinPrice"
                  min={0}
                  name="minPrice"
                  value={searchData.minPrice}
                  onChange={(value) => handleInputChange("minPrice", value)}
                />
              </div>
              <div className="col-12">
                <label htmlFor="inputMaxPrice" className="form-label">
                  Max Price
                </label>
                <NumberPicker
                  id="inputMaxPrice"
                  min={0}
                  name="maxPrice"
                  value={searchData.maxPrice}
                  onChange={(value) => handleInputChange("maxPrice", value)}
                />
              </div>
              <div className="col-12 d-flex mt-4 gap-3">
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdvanceSearch;

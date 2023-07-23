import React from "react";

const HoroscopeDetails = () => {
  return (
    <>
      <div className="form-heading">Horoscope Details</div>
      <div className="form-container">
        <div className="form-item-left">
          <select
            class="form-select form-select-sm"
            aria-label=".form-select-sm example"
            name="mangal"
          >
            <option selected>Mangal</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="saumya">Saumya</option>
            <option value="nirdosh">Nirdosh</option>
          </select>
        </div>
        <div className="form-item-right">
          <select
            class="form-select form-select-sm"
            aria-label=".form-select-sm example"
            name="nadi"
          >
            <option selected>Nadi</option>
            <option value="adhya">Adhya</option>
            <option value="madhya">Madhya</option>
            <option value="antya">Antya</option>
          </select>
        </div>

        <div className="form-item-left">
          <select
            class="form-select form-select-sm"
            aria-label=".form-select-sm example"
            name="nakshatra"
          >
            <option selected>Nakshatra</option>
            <option value="ashwini">Ashwini</option>
            <option value="bharani">Bharani</option>
            <option value="krittika">Krittika</option>
            <option value="rohini">Rohini</option>
            <option value="mrigashira">Mrigashira</option>
            <option value="ardra">Ardra</option>
            <option value="punarvasu">Punarvasu</option>
            <option value="pushya">Pushya</option>
            <option value="ashlesha">Ashlesha</option>
            <option value="magha">Magha</option>
            <option value="purvaPhalguni">Purva Phalguni</option>
            <option value="uttaraPhalguni">Uttara Phalguni</option>
            <option value="hasta">Hasta</option>
            <option value="chitra">Chitra</option>
            <option value="swati">Swati</option>
            <option value="vishakha">Vishakha</option>
            <option value="anuradha">Anuradha</option>
            <option value="jyeshtha">Jyeshtha</option>
            <option value="moola">Moola</option>
            <option value="purvaAshadha">Purva Ashadha</option>
            <option value="uttaraAshadha">Uttara Ashadha</option>
            <option value="shravana">Shravana</option>
            <option value="dhanishta">Dhanishta</option>
            <option value="shatabhisha">Shatabhisha</option>
            <option value="purvaBhadrapada">Purva Bhadrapada</option>
            <option value="uttaraBhadrapada">Uttara Bhadrapada</option>
            <option value="revati">Revati</option>
          </select>
        </div>
        <div className="form-item-right">
          <select
            class="form-select form-select-sm"
            aria-label=".form-select-sm example"
            name="gan"
          >
            <option selected>Gan</option>
            <option value="dev">Dev</option>
            <option value="manushya">Manushya</option>
            <option value="rakshas">Rakshas</option>
          </select>
        </div>
        <div className="form-item-left">
          <select
            class="form-select form-select-sm"
            aria-label=".form-select-sm example"
            name="charan"
          >
            <option selected>Charan</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <div className="form-item-right">
          <select
            class="form-select form-select-sm"
            aria-label=".form-select-sm example"
            name="rashi"
          >
            <option selected>Rashi</option>
            <option value="Mesh">Mesh</option>
            <option value="Vrushabh">Vrushabh</option>
            <option value="mithun">Mithun</option>
            <option value="kark">Kark</option>
            <option value="sinha">Sinha</option>
            <option value="kanya">Kanya</option>
            <option value="tula">Tula</option>
            <option value="vrischik">Vrischik</option>
            <option value="dhanu">Dhanu</option>
            <option value="makar">Makar</option>
            <option value="kumbh">Kumbh</option>
            <option value="meen">Meen</option>
          </select>
        </div>
        <div className="form-item-left">
          <input
            type="text"
            className="form-control form-control-sm"
            name="birthTime"
            placeholder="Birth Time"
          />
        </div>
        <div className="form-item-right">
          <input
            type="text"
            className="form-control form-control-sm"
            name="birthPlace"
            placeholder="Birth Place"
          />
        </div>
        <div className="form-item-left">
          <input
            type="text"
            className="form-control form-control-sm"
            name="devak"
            placeholder="Devak"
          />
        </div>
      </div>
    </>
  );
};

export default HoroscopeDetails;

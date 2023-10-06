import React, { useState, useContext } from "react";
import Input from "../../../components/Input";
import AddUserContext from "./AddUserContext";

const HoroscopeDetails = (props) => {
  const { formData, handleInputChange } = useContext(AddUserContext);

  return (
    <>
      <div className="admin-form-heading">Horoscope Details</div>
      <div className="admin-form-container">
        <div className="admin-form-child">
          <select
            class="form-select form-select-sm"
            aria-label=".form-select-sm example"
            name="mangal"
            onChange={handleInputChange}
          >
            <option selected={formData.mangal == "lable"} value="lable">
              Mangal
            </option>
            <option selected={formData.mangal == "yes"} value="yes">
              Yes
            </option>
            <option selected={formData.mangal == "no"} value="no">
              No
            </option>
            <option selected={formData.mangal == "saumya"} value="saumya">
              Saumya
            </option>
            <option selected={formData.mangal == "nirdosh"} value="nirdosh">
              Nirdosh
            </option>
          </select>
        </div>
        <div className="admin-form-child">
          <select
            class="form-select form-select-sm"
            aria-label=".form-select-sm example"
            name="nadi"
            onChange={handleInputChange}
          >
            <option selected={formData.nadi == "lable"} value="lable">
              Nadi
            </option>
            <option selected={formData.nadi == "adhya"} value="adhya">
              Adhya
            </option>
            <option selected={formData.nadi == "madhya"} value="madhya">
              Madhya
            </option>
            <option selected={formData.nadi == "antya"} value="antya">
              Antya
            </option>
          </select>
        </div>

        <div className="admin-form-child">
          <select
            class="form-select form-select-sm"
            aria-label=".form-select-sm example"
            name="nakshatra"
            onChange={handleInputChange}
          >
            <option selected={formData.nakshatra == "lable"} value="lable">
              Nakshatra
            </option>
            <option selected={formData.nakshatra == "ashwini"} value="ashwini">
              Ashwini
            </option>
            <option selected={formData.nakshatra == "bharani"} value="bharani">
              Bharani
            </option>
            <option
              selected={formData.nakshatra == "krittika"}
              value="krittika"
            >
              Krittika
            </option>
            <option selected={formData.nakshatra == "rohini"} value="rohini">
              Rohini
            </option>
            <option
              selected={formData.nakshatra == "mrigashira"}
              value="mrigashira"
            >
              Mrigashira
            </option>
            <option selected={formData.nakshatra == "ardra"} value="ardra">
              Ardra
            </option>
            <option
              selected={formData.nakshatra == "punarvasu"}
              value="punarvasu"
            >
              Punarvasu
            </option>
            <option selected={formData.nakshatra == "pushya"} value="pushya">
              Pushya
            </option>
            <option
              selected={formData.nakshatra == "ashlesha"}
              value="ashlesha"
            >
              Ashlesha
            </option>
            <option selected={formData.nakshatra == "magha"} value="magha">
              Magha
            </option>
            <option
              selected={formData.nakshatra == "purvaPhalguni"}
              value="purvaPhalguni"
            >
              Purva Phalguni
            </option>
            <option
              selected={formData.nakshatra == "uttaraPhalguni"}
              value="uttaraPhalguni"
            >
              Uttara Phalguni
            </option>
            <option selected={formData.nakshatra == "hasta"} value="hasta">
              Hasta
            </option>
            <option selected={formData.nakshatra == "chitra"} value="chitra">
              Chitra
            </option>
            <option selected={formData.nakshatra == "Swati"} value="swati">
              Swati
            </option>
            <option
              selected={formData.nakshatra == "vishakha"}
              value="vishakha"
            >
              Vishakha
            </option>
            <option
              selected={formData.nakshatra == "anuradha"}
              value="anuradha"
            >
              Anuradha
            </option>
            <option
              selected={formData.nakshatra == "jyeshtha"}
              value="jyeshtha"
            >
              Jyeshtha
            </option>
            <option selected={formData.nakshatra == "moola"} value="moola">
              Moola
            </option>
            <option
              selected={formData.nakshatra == "purvaAshadha"}
              value="purvaAshadha"
            >
              Purva Ashadha
            </option>
            <option
              selected={formData.nakshatra == "uttaraAshadha"}
              value="uttaraAshadha"
            >
              Uttara Ashadha
            </option>
            <option
              selected={formData.nakshatra == "shravana"}
              value="shravana"
            >
              Shravana
            </option>
            <option
              selected={formData.nakshatra == "dhanishta"}
              value="dhanishta"
            >
              Dhanishta
            </option>
            <option
              selected={formData.nakshatra == "shatabhisha"}
              value="shatabhisha"
            >
              Shatabhisha
            </option>
            <option
              selected={formData.nakshatra == "purvaBhadrapada"}
              value="purvaBhadrapada"
            >
              Purva Bhadrapada
            </option>
            <option
              selected={formData.nakshatra == "uttaraBhadrapada"}
              value="uttaraBhadrapada"
            >
              Uttara Bhadrapada
            </option>
            <option selected={formData.nakshatra == "revati"} value="revati">
              Revati
            </option>
          </select>
        </div>
        <div className="admin-form-child">
          <select
            class="form-select form-select-sm"
            aria-label=".form-select-sm example"
            name="gan"
            onChange={handleInputChange}
          >
            <option selected={formData.gan == "lable"} value="lable">
              Gan
            </option>
            <option selected={formData.gan == "dev"} value="dev">
              Dev
            </option>
            <option selected={formData.gan == "manushya"} value="manushya">
              Manushya
            </option>
            <option selected={formData.gan == "rakshas"} value="rakshas">
              Rakshas
            </option>
          </select>
        </div>
        <div className="admin-form-child">
          <select
            class="form-select form-select-sm"
            aria-label=".form-select-sm example"
            name="charan"
            onChange={handleInputChange}
          >
            <option selected={formData.charan == "lable"} value="lable">
              Charan
            </option>
            <option selected={formData.charan == "1"} value="1">
              1
            </option>
            <option selected={formData.charan == "2"} value="2">
              2
            </option>
            <option selected={formData.charan == "3"} value="3">
              3
            </option>
            <option selected={formData.charan == "4"} value="4">
              4
            </option>
          </select>
        </div>
        <div className="admin-form-child">
          <select
            class="form-select form-select-sm"
            aria-label=".form-select-sm example"
            name="rashi"
            onChange={handleInputChange}
          >
            <option selected={formData.rashi == "lable"} value="lable">
              Rashi
            </option>
            <option selected={formData.rashi == "mesh"} value="mesh">
              Mesh
            </option>
            <option selected={formData.rashi == "vrushabh"} value="vrushabh">
              Vrushabh
            </option>
            <option selected={formData.rashi == "mithun"} value="mithun">
              Mithun
            </option>
            <option selected={formData.rashi == "kark"} value="kark">
              Kark
            </option>
            <option selected={formData.rashi == "sinha"} value="sinha">
              Sinha
            </option>
            <option selected={formData.rashi == "kanya"} value="kanya">
              Kanya
            </option>
            <option selected={formData.rashi == "tula"} value="tula">
              Tula
            </option>
            <option selected={formData.rashi == "vrischik"} value="vrischik">
              Vrischik
            </option>
            <option selected={formData.rashi == "dhanu"} value="dhanu">
              Dhanu
            </option>
            <option selected={formData.rashi == "makar"} value="makar">
              Makar
            </option>
            <option selected={formData.rashi == "kumbh"} value="kumbh">
              Kumbh
            </option>
            <option selected={formData.rashi == "meen"} value="meen">
              Meen
            </option>
          </select>
        </div>
        <div className="admin-form-child">
          <Input
            type="text"
            className="form-control form-control-sm"
            variant="sm"
            name="birthTime"
            placeholder="Birth Time"
            onChange={handleInputChange}
            value={formData.birthTime || ""}
          />
        </div>
        <div className="admin-form-child">
          <Input
            type="text"
            className="form-control form-control-sm"
            variant="sm"
            name="birthPlace"
            placeholder="Birth Place"
            onChange={handleInputChange}
            value={formData.birthPlace || ""}
          />
        </div>
        <div className="admin-form-child">
          <Input
            type="text"
            className="form-control form-control-sm"
            variant="sm"
            name="devak"
            placeholder="Devak"
            onChange={handleInputChange}
            value={formData.devak || ""}
          />
        </div>
        <div className="admin-form-child">
          <Input
            type="text"
            className="form-control form-control-sm"
            variant="sm"
            name="birthDistrict"
            placeholder="Birth District"
            onChange={handleInputChange}
            value={formData.birthDistrict || ""}
          />
        </div>
      </div>
    </>
  );
};

export default HoroscopeDetails;

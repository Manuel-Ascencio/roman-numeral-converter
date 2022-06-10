import { createSlice } from "@reduxjs/toolkit";

export const convertSlice = createSlice({
  name: "convert",
  initialState: {
    value: "",
  },
  reducers: {
    romanToDecimal: (state, value) => {
      function convertCharacterToNumber(character) {
        switch (character) {
          case "I":
            return 1;
          case "V":
            return 5;
          case "X":
            return 10;
          case "L":
            return 50;
          case "C":
            return 100;
          case "D":
            return 500;
          case "M":
            return 1000;
          default:
            return -1;
        }
      }

      function convertRomanToInteger(roman) {
        if (typeof roman != "string") {
          return undefined;
        }

        let number = convertCharacterToNumber(roman.charAt(0));
        let previous;
        let current;

        for (let i = 1; i < roman.length; ++i) {
          current = convertCharacterToNumber(roman.charAt(i));

          previous = convertCharacterToNumber(roman.charAt(i - 1));

          if (current <= previous) {
            number += current;
          } else {
            number = number - previous * 2 + current;
          }
        }
        return number;
      }
      let result = convertRomanToInteger(value.payload);
      if (result < 0) {
        state.value = "";
      } else {
        state.value = result;
      }
    },
    decimalToRoman: (state, value) => {
      function convertToRoman(num) {
        const romanNumerals = {
          M: 1000,
          CM: 900,
          D: 500,
          CD: 400,
          C: 100,
          XC: 90,
          L: 50,
          XL: 40,
          X: 10,
          IX: 9,
          V: 5,
          IV: 4,
          I: 1,
        };

        let roman = "";
        for (let key in romanNumerals) {
          while (num >= romanNumerals[key]) {
            roman += key;
            num -= romanNumerals[key];
          }
        }
        return roman;
      }
      let result = convertToRoman(value.payload);
      console.log(result);
      state.value = result;
    },
  },
});

export const { romanToDecimal, decimalToRoman } = convertSlice.actions;

export default convertSlice.reducer;

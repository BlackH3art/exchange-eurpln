import React from "react";

export interface AppContextInterface {
  euroNBPPrice: number | null;
  euroPrice: number | null;
  setEuroPrice: React.Dispatch<React.SetStateAction<number | null>>;
}
import React from "react";

export interface AppContextInterface {
  euroNBPPrice: number;
  euroPrice: number;
  setEuroPrice: React.Dispatch<React.SetStateAction<number>>;
  type: string;
  setType: React.Dispatch<React.SetStateAction<string>>;
}
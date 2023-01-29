import React, { createContext, useEffect, useMemo, useState } from "react";
import { Item } from "../domain/shared/item-protocol";

import {
  getAvailableYears,
  getCars,
  getModels,
  getPrice,
} from "../services/cars";

interface Vechile {
  ano: number;
  marca: string;
  modelo: string;
  valor: string;
}

export interface FipeContextData {
  cars: Item[];
  models: Item[];
  years: Item[];
  vehicle: Vechile;
  hasError: boolean;
  isConsultingPrice: boolean;
  fetchCars(): void;
  fetchModels(codigo: string): void;
  fetchYears(codigo: string, modelo: string): void;
  consultPrice(codigo: string, modelo: string, ano: string): void;
}

export interface FipeProviderProps {
  children: React.ReactNode;
}

export const FipeContext = createContext({} as FipeContextData);

export function FipeProvider({ children }: FipeProviderProps) {
  const [cars, setCars] = useState<Item[]>([]);
  const [models, setModels] = useState<Item[]>([]);
  const [years, setYears] = useState<Item[]>([]);
  const [isConsultingPrice, setIsConsultingPrice] = useState(false);
  const [vehicle, setVehicle] = useState({} as Vechile);
  const [hasError, setHasError] = useState(false);

  async function fetchCars() {
    try {
      const data = await getCars();

      setCars(data);
    } catch (err) {
      setHasError(true);
    }
  }

  async function fetchModels(codigo: string) {
    try {
      const { modelos } = await getModels(codigo);
      setModels(modelos);
    } catch (err) {
      setHasError(true);
    }
  }

  async function fetchYears(codigo: string, modelo: string) {
    try {
      const response = await getAvailableYears(codigo, modelo);
      setYears(response);
    } catch (err) {
      setHasError(true);
    }
  }

  async function consultPrice(codigo: string, modelo: string, ano: string) {
    try {
      setIsConsultingPrice(true);
      const response = await getPrice(codigo, modelo, ano);
      console.log("response", response);
      setVehicle(response);
    } catch (error) {
      setHasError(true);
    } finally {
      setIsConsultingPrice(false);
    }
  }

  useEffect(() => {
    fetchCars();
  }, []);

  const fipeContextValues: FipeContextData = useMemo(
    () => ({
      cars,
      models,
      years,
      vehicle,
      isConsultingPrice,
      hasError,
      fetchCars,
      fetchModels,
      fetchYears,
      consultPrice,
    }),
    [cars, models, years, vehicle, isConsultingPrice, hasError]
  );

  return (
    <FipeContext.Provider value={fipeContextValues}>
      {children}
    </FipeContext.Provider>
  );
}

import { httpClient } from "../lib/axios-client";

interface VechileResponse {
  AnoModelo: number;
  Marca: string;
  Modelo: string;
  Valor: string;
}

export async function getCars() {
  const { data } = await httpClient.get("/carros/marcas");

  return data;
}

export async function getModels(codigo: string) {
  const { data } = await httpClient.get(`/carros/marcas/${codigo}/modelos`);

  return data;
}

export async function getAvailableYears(codigo: string, modelo: string) {
  const { data } = await httpClient.get(
    `/carros/marcas/${codigo}/modelos/${modelo}/anos`
  );

  return data;
}

export async function getPrice(
  codigo: string,
  modelo: string,
  ano: string
) {
  const { data } = await httpClient.get<VechileResponse>(
    `/carros/marcas/${codigo}/modelos/${modelo}/anos/${ano}`
  );

  const newResponse = {
    ano: data.AnoModelo,
    marca: data.Marca,
    modelo: data.Modelo,
    valor: data.Valor
  }

  return newResponse;
}

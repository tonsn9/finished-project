import type { NextPage } from "next";
import Head from "next/head";
import { FormEvent, useEffect, useState } from "react";
import api from "../services/api";

interface Props {
  nome: string;
  codigo: string;
}

interface Price {
  Valor: string;
  Marca: string;
  Modelo: string;
  AnoModelo: number;
  Combustivel: string;
  CodigoFipe: string;
  MesReferencia: string;
  TipoVeiculo: number;
  SiglaCombustivel: string;
}

interface Props2 {
  nome: string;
  codigo: number;
}

const Home: NextPage = () => {
  const [cars, setCars] = useState<Props[]>([]);
  const [selectedCar, setSelectedCar] = useState("");
  const [models, setModels] = useState<{ anos: Props[]; modelos: Props2[] }>();
  const [selectedModel, setSelectedModel] = useState("");
  const [years, setYears] = useState<Props[]>([]);
  const [price, setPrice] = useState<Price>();
  const [selectedYear, setSelectedYear] = useState("");
  // const [showPrice, setShowPrice] = useState(false);
  async function getCars() {
    try {
      const response = await api.get("/carros/marcas");
      setCars(response.data);
    } catch (err) {
      // console.log(err);
    }
  }

  async function getModels(codigo: string) {
    try {
      const response = await api.get(`/carros/marcas/${codigo}/modelos`);
      setModels(response.data);
    } catch (err) {
      // console.log(err);
    }
  }

  async function getYears(codigo: string, modelo: string) {
    try {
      const response = await api.get(
        `/carros/marcas/${codigo}/modelos/${modelo}/anos`
      );
      setYears(response.data);
    } catch (err) {
      // console.log(err);
    }
  }

  async function getPrice(codigo: string, modelo: string, year: string) {
    try {
      const response = await api.get(
        `/carros/marcas/${codigo}/modelos/${modelo}/anos/${year}`
      );
      setPrice(response.data);
    } catch (err) {
      // console.log(err);
    }
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    getPrice(selectedCar, selectedModel, selectedYear);
  }

  useEffect(() => {
    getCars();
    getModels(selectedCar);
    getYears(selectedCar, selectedModel);
  }, [selectedCar, selectedModel]);
  return (
    <>
      <Head>
        <title>Projeto</title>
      </Head>
       
    </>
  );
};

export default Home;

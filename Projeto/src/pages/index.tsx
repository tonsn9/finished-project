import type { NextPage } from "next";
import Head from "next/head";
import { FormEvent, useEffect, useState } from "react";
import api from "../services/api";
import { Container } from "../styles/modules/home";

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
      <Container>
        <div>
          <h1>Tabela Fipe</h1>
          <h3>Consulte o valor de um veículo de fora gratuita</h3>
          <form onSubmit={handleSubmit}>
            <select
              value={selectedCar}
              onChange={(event) => setSelectedCar(event.target.value)}
            >
              <option>Selecionar</option>
              {cars.map((car) => (
                <option key={car.codigo} value={car.codigo}>
                  {car.nome}
                </option>
              ))}
            </select>

            {!!models && (
              <select
                value={selectedModel}
                onChange={(event) => setSelectedModel(event.target.value)}
              >
                <option>Selecionar</option>
                {models?.modelos?.map((model: any) => (
                  <option key={model.codigo} value={model.codigo}>
                    {model.nome}
                  </option>
                ))}
              </select>
            )}

            {!!years && (
              <select
                value={selectedYear}
                onChange={(event) => setSelectedYear(event.target.value)}
              >
                <option>Selecionar</option>
                {years.map((year: any) => (
                  <option key={year.codigo} value={year.codigo}>
                    {year.nome}
                  </option>
                ))}
              </select>
            )}
            <button type="submit">Consultar preço</button>
          </form>
          {!!price && (
            <div>
              <strong>Tabela fipe:{price?.Modelo}</strong>
              <span>{price?.Valor}</span>
              <small>Este é o preço de compra do veículo </small>
            </div>
          )}
        </div>
      </Container>
    </>
  );
};

export default Home;

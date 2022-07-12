import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import api from "../services/api";
import { Container } from "../styles/modules/home";

interface Cars {
  nome: string;
  codigo: string;
}

const Home: NextPage = () => {
  const [cars, setCars] = useState<Cars[]>([]);
  const [selectedCar, setSelectedCar] = useState("");
  const [models, setModels] = useState([]) as any;
  const [selectedModel, setSelectedModel] = useState("");
  const [years, setYears] = useState([]) as any;
  async function getCars() {
    try {
      const response = await api.get("/carros/marcas");
      setCars(response.data);
    } catch (err) {
      console.log(err);
    }
  }
  console.log(years);

  async function getModels(codigo: string) {
    try {
      const response = await api.get(`/carros/marcas/${codigo}/modelos`);
      setModels(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  async function getYears(codigo: string, modelo: string) {
    try {
      const response = await api.get(
        `/carros/marcas/${codigo}/modelos/${modelo}/anos`
      );
      setYears(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getCars();
    getModels(selectedCar);
    getYears(selectedCar, selectedModel);
    // console.log(cars);
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
          <form>
            <select
              value={selectedCar}
              onChange={(event) => setSelectedCar(event.target.value)}
            >
              {cars.map((car) => (
                <option key={car.codigo} value={car.codigo}>
                  {car.nome}
                </option>
              ))}
            </select>

            <select
              value={selectedModel}
              onChange={(event) => setSelectedModel(event.target.value)}
            >
              {models?.modelos?.map((model: any) => (
                <option key={model.codigo} value={model.codigo}>
                  {model.nome}
                </option>
              ))}
            </select>

            <select>
              {years.map((year: any) => (
                <option key={year.codigo} value={year.codigo}>
                  {year.nome}
                </option>
              ))}
            </select>
            <button type="submit">Consultar preço</button>
          </form>
          <div>
            <strong>Tabela fipe: Prisma</strong>
            <span>R$ 13.000,00</span>
            <small>Este é o preço de compra do veículo </small>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;

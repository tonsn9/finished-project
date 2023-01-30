import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import { useFipe } from "../hooks/useFipe";
import { Select, FormControl, Button } from "../components";

import { Box, Container, PriceContainer, Wrapper } from "../styles/pages/home";

const Home: NextPage = () => {
  const [selectedCar, setSelectedCar] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const {
    cars,
    models,
    years,
    fetchModels,
    fetchYears,
    consultPrice,
    vehicle,
    isConsultingPrice,
    hasError,
  } = useFipe();

  const shouldShowPrice = Object.keys(vehicle).length > 0;

  useEffect(() => {
    if (selectedCar.length > 0) {
      fetchModels(selectedCar);
    }

    if (selectedModel.length > 0) {
      fetchYears(selectedCar, selectedModel);
    }
  }, [fetchModels, fetchYears, selectedCar, selectedModel]);

  return (
    <>
      <Head>
        <title>Tabela Fipe</title>
      </Head>

      <Container>
        <Wrapper>
          <h1>Tabela Fipe</h1>
          <strong>Consulte o valor de um veículo de forma gratuita</strong>

          <Box>
            <FormControl visible>
              <Select
                value={selectedCar}
                onChange={(event) => setSelectedCar(event.target.value)}
              >
                <option>Carros</option>
                {cars?.map((item) => (
                  <option key={item.codigo} value={item.codigo}>
                    {item.nome}
                  </option>
                ))}
              </Select>
            </FormControl>

            <FormControl visible={selectedCar.length > 0}>
              <Select
                value={selectedModel}
                onChange={(event) => setSelectedModel(event.target.value)}
              >
                <option>Modelos</option>
                {models?.map((item) => (
                  <option key={item.codigo} value={item.codigo}>
                    {item.nome}
                  </option>
                ))}
              </Select>
            </FormControl>

            <FormControl visible={selectedModel.length > 0}>
              <Select
                value={selectedYear}
                onChange={(event) => setSelectedYear(event.target.value)}
              >
                <option>Anos</option>
                {years?.map((item) => (
                  <option key={item.codigo} value={item.codigo}>
                    {item.nome}
                  </option>
                ))}
              </Select>
            </FormControl>

            <Button
              type="button"
              disabled={!(selectedYear.length > 0) || isConsultingPrice}
              onClick={() =>
                consultPrice(selectedCar, selectedModel, selectedYear)
              }
            >
              Consultar preço
            </Button>
          </Box>

          {shouldShowPrice && (
            <PriceContainer>
              <strong>
                Tabela Fipe: Preço {`${vehicle.modelo} ${vehicle.ano}`}
              </strong>
              <span>{vehicle.valor}</span>
              <small>Este é o preço de compra do veículo</small>
            </PriceContainer>
          )}

          {hasError && (
            <p>Ocorreu um erro ao buscar informações sobre este veículo.</p>
          )}
        </Wrapper>
      </Container>
    </>
  );
};

export default Home;

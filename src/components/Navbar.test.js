import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NavBar from "./NavBar";

test("renders the component NavBar", () => {
    render(<NavBar />);
    
    // My Recipe text is rendered
    const myRecipe = screen.getByTestId("my-recipe");
    expect(myRecipe).toBeInTheDocument();
    expect(myRecipe).toHaveTextContent("My Recipe");
    
    // form search is rendered
    const formSearch = screen.getByTestId("form-search");
    expect(formSearch).toBeInTheDocument();
    
    // input search is rendered
    const inputSearch = screen.getByPlaceholderText("Recipe Name");
    expect(inputSearch).toBeInTheDocument();
    
    // button search is rendered
    const buttonSearch = screen.getByRole("button", { name: "Search" });
    expect(buttonSearch).toBeInTheDocument();
    });
    
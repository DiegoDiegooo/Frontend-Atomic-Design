import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { LoginContainer } from "./LoginContainer";

describe("LoginContainer", () => {
    it("muestra el título Login", () => {
        render(<LoginContainer />);
        expect(screen.getByText("Login")).toBeInTheDocument();
    });

    it("muestra el botón Iniciar sesión", () => {
        render(<LoginContainer />);
        expect(
            screen.getAllByRole("button", { name: "Iniciar sesión" }).length
        ).toBeGreaterThan(0);

    });
});




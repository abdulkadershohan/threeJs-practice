import { BikeSuzukiCanvas, ComputersCanvas, MotorcycleCanvas } from "../components";

export default function Home() {
    return (
        <main
        >
            <h1
                className="text-3xl text-center font-bold text-white mt-5"
            >
                This is the partice project for the Three JS
            </h1>
            <ComputersCanvas />
            <BikeSuzukiCanvas />
            <MotorcycleCanvas />

        </main>
    )
}

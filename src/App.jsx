import Card from "./Card";

const App = () => {
  return (
    <div>
      <h1 className="font-semibold text-center text-4xl">
        Blockbuster Deals on Computer Accessories | Shop Now
      </h1>
      <Card
        title="  Logitech MX Master 3S"
        disc1="8,000 DPI"
        disc2="5 Programmable Buttons"
        oldPrice="$12,495"
        newPrice="$8,999"
      />

      <Card
        title="  Apple Pencil (2nd Gen)"
        disc1="Intuitive Touch Surface"
        disc2="Designed for IPad Pro"
        oldPrice="$11,900"
        newPrice="$9,199"
      />

      <Card
        title="  Zebronics Zeb-Transformer"
        disc1="8,000 DPI"
        disc2="5 Programmable Buttons"
        oldPrice="$1,599"
        newPrice="$899"
      />

      <Card
        title="  Portronics Wireless Mouse"
        disc1="Wireless Mouse 2.45Hz"
        disc2="Optical Orientation"
        oldPrice="$599"
        newPrice="$278"
      />
    </div>
  );
};

export default App;

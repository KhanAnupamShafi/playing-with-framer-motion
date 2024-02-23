import { Route, Routes, useLocation } from 'react-router-dom';

import ButtonTap from './components/ButtonTap';
import Counter from './components/Counter';
import Home from './components/Home';
import Keyframe from './components/Keyframe';
import ScrollReveal from './components/ScrollReveal';
import Simple from './components/Simple';
import TextMotion from './components/TextMotion';
import TransitionType from './components/TransitionType';
import Variants from './components/Variants';

import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Pizza from './components/Pizza';
import Base from './components/Pizza/Base';
import Order from './components/Pizza/Order';
import PizzaHome from './components/Pizza/PizzaHome';
import Toppings from './components/Pizza/Toppings';
import Stagger from './components/Stagger';

function App() {
  const location = useLocation();
  const [pizza, setPizza] = useState({ base: '', toppings: [] });
  const [showModal, setShowModal] = useState(false);

  const addBase = (base) => {
    setPizza({ ...pizza, base });
  };

  const addTopping = (topping) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter((item) => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  };
  return (
    <>
      <AnimatePresence
        mode="wait"
        onExitComplete={() => setShowModal(false)}>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />} exact>
            <Route path="/simple" element={<Simple />} />
            <Route path="/keyframe" element={<Keyframe />} />
            <Route path="/button-tap" element={<ButtonTap />} />
            <Route path="/text-motion" element={<TextMotion />} />
            <Route path="/transition" element={<TransitionType />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/scroll" element={<ScrollReveal />} />
            <Route path="/variants" element={<Variants />} />
            <Route path="/stagger" element={<Stagger />} />
          </Route>

          <Route
            path="/pizza"
            element={<Pizza showModal={showModal} />}>
            <Route
              path="base"
              element={<Base addBase={addBase} pizza={pizza} />}
            />
            <Route
              path="toppings"
              element={
                <Toppings addTopping={addTopping} pizza={pizza} />
              }
            />
            <Route
              path="order"
              element={
                <Order pizza={pizza} setShowModal={setShowModal} />
              }
            />
            <Route path="" element={<PizzaHome />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;

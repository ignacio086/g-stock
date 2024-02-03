"use client";
import Image from "next/image";
import { Outfit } from "next/font/google";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaBalanceScale,
  FaCartPlus,
  FaChevronDown,
  FaChild,
  FaHome,
  FaNetworkWired,
  FaProductHunt,
} from "react-icons/fa";
const inter = Outfit({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="w-screen h-[52rem] lg:h-screen  ">
        <div className="h-full w-full bg-gradient-to-b from-blue-500 to-slate-100/50  flex items-center flex-col lg:flex-row lg:justify-end p-2 lg:p-0 justify-center gap-12 lg:gap-0">
          <div className="w-full h-full  bg-gradient-to-r from-slate-100 via-slate-100 z-10">
            <div className="w-1/2 h-full flex flex-col items-center justify-between  p-12">
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-xs lg:text-lg text-black "
              >
                Gestor de stock, ventas y arqueos.
              </motion.p>
              <div className="flex flex-col   gap-2 lg:gap-0   rounded-xl">
                <h1
                  style={inter.style}
                  className="text-5xl lg:mb-20 lg:text-9xl text-blue-800"
                >
                  G-STOCK
                </h1>
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="text-md lg:text-lg "
                >
                  Impulsá tu negocio de manera fácil y rápida.
                </motion.h2>
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                  className="text-md lg:text-lg "
                >
                  Más tiempo para vos = Más ganancia para tu negocio.
                </motion.h2>
              </div>
              <div className=" w-screen h-24 flex flex-col justify-center items-center">
                <h1>Ver más</h1>
                <motion.div
                  transition={{ ease: "linear", duration: 1, repeat: Infinity }}
                  animate={{ y: 10 }}
                  loo
                >
                  <FaChevronDown />
                </motion.div>
              </div>
            </div>
          </div>
          <div className=" absolute h-full w-1/2  bg-center bg-contain bg-no-repeat lg:bg-[url('/productos.png')] "></div>
        </div>
      </div>
      <div className="h-screen w-screen p-2 bg-gradient-to-tr from-blue-500 from-50% via-blue-500 from-50% to-slate-100 to-50% flex flex-col  justify-center items-center gap-32">
        <div className="w-screen p-2 flex items-center justify-center">
          <motion.h1
            initial={{ y: 200 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 250,
              damping: 12,
            }}
            style={inter.style}
            className="text-xl lg:text-5xl text-blue-800 text-center mt-8 flex"
          >
            A un CLICK de cambiar tu negocio
            <FaChild />
          </motion.h1>
        </div>
        <div className="h-screen w-screen p-2   flex flex-col lg:flex-row justify-center items-center gap-32">
          <motion.div
            initial={{ y: 200 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 250,
              damping: 12,
            }}
            className="w-full lg:h-full lg:w-1/4 bg-gradient-to-b from-blue-300 to-gray-200 rounded-xl"
          >
            <motion.div className="h-full w-full backdrop-blur bg-slate-100/10 rounded-xl flex flex-col text-center justify-between p-8 gap-8">
              <div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="text-4xl text-blue-800 ">Plan Local</h1>
                  <h1 className="text-4xl text-blue-800 ">
                    <FaHome />
                  </h1>
                </div>
                <p>AR$ 30.000</p>
              </div>
              <div className="text-left gap-2">
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  viewport={{ once: true }}
                  className="text-lg "
                >
                  ○ Un solo pago.
                </motion.h2>
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  viewport={{ once: true }}
                  className="text-lg "
                >
                  ○ Gran velocidad.
                </motion.h2>
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1.4 }}
                  viewport={{ once: true }}
                  className="text-lg "
                >
                  ○ Operaciones ilimitadas.
                </motion.h2>
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1.6 }}
                  viewport={{ once: true }}
                  className="text-lg "
                >
                  ○ Interfaz intuitiva.
                </motion.h2>
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1.8 }}
                  viewport={{ once: true }}
                  className="text-lg "
                >
                  ○ Sin uso de internet.
                </motion.h2>
              </div>
              <Link
                className="bg-blue-700 w-full h-12 rounded-xl flex justify-center items-center text-white border-2 border-slate-300 hover:bg-white hover:text-blue-700 hover:border-slate-700 text-xs"
                href="https://wa.me/542634782743"
              >
                Consultar por plan local
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ y: 200 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 250,
              damping: 12,
            }}
            className=" border-2 w-full  lg:h-full lg:w-1/4 bg-gradient-to-b from-blue-300 to-gray-200 rounded-xl"
          >
            <motion.div className="h-full w-full backdrop-blur bg-slate-100/10 rounded-xl flex flex-col text-center justify-between p-8 gap-8">
              <div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className="text-4xl text-blue-800 ">Plan Web</h1>
                  <h1 className="text-4xl text-blue-800 ">
                    <FaNetworkWired />
                  </h1>
                </div>
                <p>AR$ 80.000/mes</p>
              </div>
              <div className="text-left gap-2">
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  viewport={{ once: true }}
                  className="text-lg "
                >
                  ○ Muchos dispositivos.
                </motion.h2>
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1.4 }}
                  viewport={{ once: true }}
                  className="text-lg "
                >
                  ○ No requiere gran tecnología.
                </motion.h2>
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1.6 }}
                  viewport={{ once: true }}
                  className="text-lg "
                >
                  ○ Gran velocidad.
                </motion.h2>
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1.8 }}
                  viewport={{ once: true }}
                  className="text-lg "
                >
                  ○ Fácil de actualizar y escalar.
                </motion.h2>
                <motion.h2
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                  viewport={{ once: true }}
                  className="text-lg "
                >
                  ○ Interfaz intuitiva.
                </motion.h2>
              </div>
              <Link
                className="bg-blue-700 w-full h-12 rounded-xl flex justify-center items-center text-white border-2 border-slate-300 hover:bg-white hover:text-blue-700 hover:border-slate-700 text-xs"
                href="https://wa.me/542634782743"
              >
                Consultar por plan web
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <div></div>
      </div>
      <div className="w-screen h-48 bg-blue-500"></div>
      <div className=" w-screen bg-gradient-to-br from-blue-500 from-50% via-blue-500 from-50% to-slate-100 to-50%  flex flex-col justify-center items-center lg:gap-32">
        <div className="w-full h-96   flex flex-col-reverse  lg:flex-row justify-center items-center lg:gap-8 p-2 lg:p-8">
          <div className="w-full lg:w-1/2 h-full bg-cover bg-no-repeat bg-[url('/productos.png')] border-2 border-gray-700 "></div>
          <div className="w-full lg:w-1/3 h-full flex flex-col text-left">
            <h1
              style={inter.style}
              className="text-xl lg:text-3xl text-white flex"
            >
              Listá productos. <FaProductHunt />
            </h1>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-md lg:text-lg text-lack"
            >
              Ordená tus productos por grupo y buscalos de una forma rapida y
              sencilla. Ademas realizá aumentos con UN SOLO CLICK a todos tus
              productos.
            </motion.p>
          </div>
        </div>
        <div className="w-full h-96   flex flex-col lg:flex-row justify-center items-center lg:gap-8 p-2 lg:p-8">
          <div className="w-full lg:w-1/3 h-full flex flex-col text-left">
            <h1
              style={inter.style}
              className="text-xl lg:text-3xl text-white flex"
            >
              Agregá ventas. <FaCartPlus />
            </h1>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-md lg:text-lg text-black"
            >
              Agregá ventas de forma fácil seleccionando cantidad y forma de
              pago, actualizando stock de forma automática.
            </motion.p>
          </div>
          <div className="w-full lg:w-1/2 h-full bg-cover bg-no-repeat bg-[url('/ventas.png')] border-2 border-gray-700 "></div>
        </div>
        <div className="w-full h-96   flex flex-col-reverse  lg:flex-row justify-center items-center lg:gap-8 p-2 lg:p-8">
          <div className="w-full lg:w-1/2 h-full bg-cover bg-no-repeat bg-[url('/arqueos.png')] border-2 border-gray-700 "></div>
          <div className="w-full lg:w-1/3 h-full flex flex-col text-left">
            <h1
              style={inter.style}
              className="text-xl lg:text-3xl text-blue-800 flex"
            >
              Realizá arqueos. <FaBalanceScale />
            </h1>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-md lg:text-lg text-black"
            >
              Visualizá tus ganancias diarias con arqueos fáciles de actualizar,
              con sus diferentes entradas de pago y un total como resumen.
            </motion.p>
          </div>
        </div>
      </div>
      <div className="w-screen mt-8 h-32 bg-slate-100 flex flex-col border-t-2 border-slate-300 items-center justify-center gap-2">
        <p className="text-blue-900 text-md lg:text-xl">Contacto</p>
        <p className="text-blue-900 text-md lg:text-xl">
          Email: ignaarigomez@gmail.com
        </p>
        <p className="text-blue-900 text-md lg:text-xl">
          Whatsapp:{" "}
          <a className="hover:underline" href="https://wa.me/542634782743">
            +54152634782743
          </a>
        </p>
      </div>
    </main>
  );
}

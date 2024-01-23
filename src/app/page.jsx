"use client";
import Image from "next/image";
import { Outfit } from "next/font/google";
import { motion } from "framer-motion";
import Link from "next/link";

const inter = Outfit({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="h-screen w-screen bg-gradient-to-b from-blue-300 to-slate-100 flex items-center flex-col  justify-center gap-12">
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xs lg:text-lg text-blue-900"
        >
          Gestor de stock, ventas y arqueos.
        </motion.p>
        <div className="flex flex-col text-center p-2 lg:p-20 gap-2 lg:gap-0 backdrop-blur bg-slate-100/50 rounded-xl">
          <h1 style={inter.style} className="text-xl lg:text-9xl text-blue-800">
            G-STOCK
          </h1>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-xs lg:text-lg "
          >
            Impulsa tu negocio de manera facil y rapida.
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="text-xs lg:text-lg "
          >
            Mas tiempo para vos = Mas ganancia para tu negocio.
          </motion.h2>
        </div>
        <div className=" w-24 h-24 flex flex-col justify-center items-center">
          <h1>Ver mas</h1>
          <motion.div
            transition={{ ease: "linear", duration: 1, repeat: Infinity }}
            animate={{ y: 10 }}
            loo
          >
            <h1>↓</h1>
          </motion.div>
        </div>
      </div>
      <div className="h-screen w-screen bg-slate-100 flex flex-col lg:flex-row justify-center items-center gap-32">
        <motion.div
          initial={{ x: -400 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 250,
            damping: 12,
          }}
          className="h-2/3 w-1/4 bg-gradient-to-b from-blue-300 to-gray-200 rounded-xl"
        >
          <motion.div className="h-full w-full backdrop-blur bg-slate-100/10 rounded-xl flex flex-col text-center justify-between p-8 gap-8">
            <div>
              <h1 className="text-4xl text-blue-800">Plan Local</h1>
              <p>AR$ 100.000</p>
            </div>
            <div className="text-left gap-2">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1 }}
                viewport={{once:true}}
                className="text-lg "
              >
                ○ Un solo pago.
              </motion.h2>
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                viewport={{once:true}}
                className="text-lg "
              >
                ○ Gran velocidad.
              </motion.h2>
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
                viewport={{once:true}}
                className="text-lg "
              >
                ○ Operaciones ilimitadas.
              </motion.h2>
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
                viewport={{once:true}}
                className="text-lg "
              >
                ○ Interfaz intuitiva.
              </motion.h2>
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
                viewport={{once:true}}
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
          initial={{ x: 400 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 250,
            damping: 12,
          }}
          className=" border-2 h-2/3 w-1/4 bg-gradient-to-b from-blue-300 to-gray-200 rounded-xl"
        >
          <motion.div className="h-full w-full backdrop-blur bg-slate-100/10 rounded-xl flex flex-col text-center justify-between p-8 gap-8">
            <div>
              <h1 className="text-4xl text-blue-800">Plan Web</h1>
              <p>AR$ 80.000/mes</p>
            </div>
            <div className="text-left gap-2">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                viewport={{once:true}}
                className="text-lg "
              >
                ○ Muchos dispositivos.
              </motion.h2>
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
                viewport={{once:true}}
                className="text-lg "
              >
                ○ No requiere gran tecnologia.
              </motion.h2>
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
                viewport={{once:true}}
                className="text-lg "
              >
                ○ Gran velocidad.
              </motion.h2>
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
                viewport={{once:true}}
                className="text-lg "
              >
                ○ Facil de actualizar y escalar.
              </motion.h2>
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 2 }}
                viewport={{once:true}}
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
      <div className=" w-screen bg-slate-100 flex flex-col justify-center items-center gap-32">
        <div className="w-full h-96  bg-slate-100 flex flex-col lg:flex-row justify-center items-center gap-8 p-8">
          <div className="w-1/2 h-full bg-cover bg-no-repeat bg-[url('/productos.png')] border-2 border-gray-700 "></div>
          <div className="w-1/3 h-full flex flex-col text-left">
            <h1
              style={inter.style}
              className="text-xl lg:text-3xl text-blue-800"
            >
              Listá productos
            </h1>
            <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{once:true}}
          className="text-xs lg:text-lg text-lack"
        >
          Ordená tus productos por grupo y buscalos de una forma rapida y sencilla. Ademas realizá aumentos con UN SOLO CLICK a todos tus productos.
        </motion.p>
          </div>
        </div>
        <div className="w-full h-96  bg-slate-100 flex flex-col lg:flex-row justify-center items-center gap-8 p-8">
        <div className="w-1/3 h-full flex flex-col text-left">
            <h1
              style={inter.style}
              className="text-xl lg:text-3xl text-blue-800"
            >
              Agregá ventas
            </h1>
            <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{once:true}}
          className="text-xs lg:text-lg text-black"
        >
          Agregá ventas de forma fácil seleccionando cantidad y forma de pago, actualizando stock de forma automática.
        </motion.p>
          </div>
          <div className="w-1/2 h-full bg-cover bg-no-repeat bg-[url('/ventas.png')] border-2 border-gray-700 "></div>
        </div>
        <div className="w-full h-96  bg-slate-100 flex flex-col lg:flex-row justify-center items-center gap-8 p-8">
          <div className="w-1/2 h-full bg-cover bg-no-repeat bg-[url('/arqueos.png')] border-2 border-gray-700 "></div>
          <div className="w-1/3 h-full flex flex-col text-left">
            <h1
              style={inter.style}
              className="text-xl lg:text-3xl text-blue-800"
            >
              Realizá arqueos
            </h1>
            <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{once:true}}
          className="text-xs lg:text-lg text-black"
        >
          Visualizá tus ganancias diarias con arqueos fáciles de actualizar, con sus diferentes entradas de pago y un total como resumen.
        </motion.p>
          </div>
        </div>
      </div>
    </main>
  );
}

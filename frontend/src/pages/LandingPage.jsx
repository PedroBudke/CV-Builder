import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function LandingPage() {
  const [curriculos, setCurriculos] = useState([]);
  const [stats, setStats] = useState({ total: 0, cargos: 0, ultimos: [] });
  const [modalAberto, setModalAberto] = useState(false);
  const [curriculoSelecionado, setCurriculoSelecionado] = useState(null);

  useEffect(() => {
    const dados = [
      {
        id: 1,
        nome: "Ana Silva",
        cargo: "Desenvolvedora Frontend",
        email: "ana@email.com",
        telefone: "(11) 99888-7777",
      },
      {
        id: 2,
        nome: "Carlos Mendes",
        cargo: "Analista de Sistemas",
        email: "carlos@email.com",
        telefone: "(21) 97777-6666",
      },
      {
        id: 3,
        nome: "Juliana Oliveira",
        cargo: "UX Designer",
        email: "juliana@email.com",
        telefone: "(31) 96666-5555",
      },
      {
        id: 4,
        nome: "Pedro Budke",
        cargo: "Full Stack Developer",
        email: "pedro@email.com",
        telefone: "(41) 95555-4444",
      },
    ];

    setCurriculos(dados);
    curriculos;
    const cargosUnicos = new Set(dados.map((c) => c.cargo)).size;
    const ultimosTres = dados.slice(-3).reverse();

    setStats({
      total: dados.length,
      cargos: cargosUnicos,
      ultimos: ultimosTres,
    });
  }, []);

  // Função para abrir o modal
  const abrirModal = (curriculo) => {
    setCurriculoSelecionado(curriculo);
    setModalAberto(true);
  };

  // Função para fechar o modal
  const fecharModal = () => {
    setModalAberto(false);
    setCurriculoSelecionado(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-sm py-6 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <h1 className="text-2xl font-bold text-gray-900">📄 CV Builder</h1>
          
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <Link to="/" className="hover:text-blue-600 transition">Início</Link>
            <Link to="/sobre" className="hover:text-blue-600 transition">Sobre</Link>
            <Link to="/servicos" className="hover:text-blue-600 transition">Serviços</Link>
            <Link to="/contato" className="hover:text-blue-600 transition">Contato</Link>
          </nav>

          <div className="flex gap-3">
            <button className="text-sm text-gray-600 hover:text-blue-600 transition">
              Cadastrar
            </button>
            <button className="text-sm text-gray-600 hover:text-blue-600 transition">
              Logar
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Bem-vindo ao CV Builder
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Crie currículos profissionais em minutos. Modernos, responsivos e prontos para impressionar recrutadores.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/criar-curriculo"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold shadow-sm hover:shadow transition"
            >
              Criar Meu Currículo
            </Link>
            <Link
              to="/visualizar-curriculos"
              className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition"
            >
              Visualizar Currículos
            </Link>
          </div>
        </div>

        {/* Dashboard de Estatísticas */}
        <section className="py-12 bg-white rounded-lg shadow-sm border border-gray-200 mb-16">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
            <div className="text-center p-6">
              <h3 className="text-3xl font-bold text-blue-600">{stats.total}</h3>
              <p className="text-gray-600 mt-2">Currículos Criados</p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-3xl font-bold text-purple-600">{stats.cargos}</h3>
              <p className="text-gray-600 mt-2">Cargos Diferentes</p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-3xl font-bold text-green-600">100%</h3>
              <p className="text-gray-600 mt-2">Prontos para Enviar</p>
            </div>
          </div>
        </section>

        {/* Últimos Currículos */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">
            Últimos Currículos Criados
          </h2>
          <div className="space-y-4">
            {stats.ultimos.length === 0 ? (
              <p className="text-center text-gray-500">
                Nenhum currículo criado ainda.
              </p>
            ) : (
              stats.ultimos.map((curriculo) => (
                <div
                  key={curriculo.id}
                  onClick={() => abrirModal(curriculo)}
                  className="flex justify-between items-center p-5 bg-white rounded-lg border border-gray-200 hover:shadow-sm hover:border-blue-300 transition cursor-pointer"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{curriculo.nome}</h3>
                    <p className="text-gray-600">{curriculo.cargo}</p>
                  </div>
                  <span className="text-sm text-gray-500">
                    ID: {curriculo.id}
                  </span>
                </div>
              ))
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-gray-500 border-t border-gray-200 mt-12">
        <p>© 2025 CV Builder — Desenvolvido por Pedro Budke e Juan Kruger</p>
      </footer>

      {/* Modal/Pop-up */}
      {modalAberto && curriculoSelecionado && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  {curriculoSelecionado.nome}
                </h3>
                <button
                  onClick={fecharModal}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Cargo</p>
                  <p className="font-medium">{curriculoSelecionado.cargo}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">{curriculoSelecionado.email}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Telefone</p>
                  <p className="font-medium">{curriculoSelecionado.telefone}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">ID</p>
                  <p className="font-medium">#{curriculoSelecionado.id}</p>
                </div>
              </div>
              
              <div className="mt-6 flex gap-3">
                <Link
                  to={`/editar/${curriculoSelecionado.id}`}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded-lg font-medium transition"
                >
                  Editar
                </Link>
                <button
                  onClick={fecharModal}
                  className="flex-1 border border-gray-300 hover:border-gray-400 text-gray-700 py-2 rounded-lg font-medium transition"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
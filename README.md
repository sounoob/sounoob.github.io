# SouNoob.com.br

Este é o repositório do blog [SouNoob](https://sounoob.com.br). Um blog voltado para estudantes de tecnologia e desenvolvimento, documentando conhecimentos, dicas, tutoriais e soluções de problemas.

## 🛠️ Tecnologias Utilizadas

- **[Jekyll](https://jekyllrb.com/):** Gerador de sites estáticos na versão 4.x.
- **[Ruby](https://www.ruby-lang.org/):** Linguagem utilizada pelo Jekyll (v3.3).
- **[Docker & Docker Compose](https://www.docker.com/):** Utilizados para criar um ambiente de desenvolvimento isolado e padronizado.
- **[GitHub Pages / Actions](https://pages.github.com/):** Hospedagem e automação de CI/CD para deploy das publicações.

## 🚀 Como subir o ambiente de desenvolvimento local

Para rodar o projeto em sua máquina localmente de forma isolada, não é necessário instalar o Ruby, apenas o **Docker**.

### Pré-requisitos
- [Docker](https://docs.docker.com/get-docker/) instalado.

### Passo a passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/sounoob/sounoob.github.io.git
   cd sounoob.github.io
   ```

2. **Inicie o ambiente:**
   Basta executar o Docker Compose na raiz do projeto:
   ```bash
   docker compose up
   ```
   *Na primeira execução, o docker fará o download da imagem do Ruby e vai instalar todas as dependências do `Gemfile` (bundle install). Isso pode levar alguns minutos.*

3. **Acesse o Blog:**
   Abra seu navegador e acesse:
   [http://localhost:4000](http://localhost:4000)

4. **Para parar o servidor:**
   No terminal, aperte `CTRL + C` e o container será finalizado.

## ☁️ Deploy

O deploy é feito de forma totalmente automática através do **GitHub Actions**.
Quando você realiza um `push` ou dá merge na branch principal (`master`/`main`), o GitHub Actions (configurado em `.github/workflows/jekyll.yml`) compila o site usando o Jekyll 4 e publica a versão estática diretamente no GitHub Pages.

> **Importante:** No repositório do GitHub, a configuração do GitHub Pages (`Settings` -> `Pages`) deve estar marcada como **"GitHub Actions"** no campo "Source", em vez de "Deploy from a branch".

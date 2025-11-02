# Pinguino.cc Website

This is the source code for the official Pinguino Project website, available at [pinguinoide.github.io](https://pinguinoide.github.io).

## About the Project

The Pinguino Project is an open-source electronics prototyping platform. It consists of an Integrated Development Environment (IDE) and hardware boards. This website serves as the main resource for documentation, news, and community interaction.

The website is built using [VitePress](https://vitepress.dev/), a static site generator that is fast, easy to use, and highly customizable.

## Getting Started

To run the website locally, you will need to have [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/) installed.

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Pinguino-cc/pinguino-cc.git
   ```

2. **Run the development server:**

   ```bash
   # Create de container service (for first time)
   docker compose up --no-start

   # Install dependencies
   docker compose run pinuino-cc npm install

   # Excecute de dev environment
   docker-compose up

   # Verify the status
   docker compose ps

   # Stop the service
   docker compose stop

   # Delete the service
   docker compose down
   ```

The website will be available at `http://localhost:5173`.

## Contributing

We welcome contributions to the Pinguino.cc website. If you would like to contribute, please follow these steps:

1. **Fork the repository.**
2. **Create a new branch for your changes.**
3. **Make your changes.**
4. **Submit a pull request.**


## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/Pinguino-cc/pinguino-cc/blob/main/LICENSE) file for more information.

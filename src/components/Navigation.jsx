export const ArrowPrevious = () => {
  return (
    <svg
      role="img"
      fill="currentColor"
      height="16"
      width="16"
      aria-hidden="true"
      aria-label="Anterior"
      viewBox="0 0 16 16"
    >
      <path d="M11.03.47a.75.75 0 0 1 0 1.06L4.56 8l6.47 6.47a.75.75 0 1 1-1.06 1.06L2.44 8 9.97.47a.75.75 0 0 1 1.06 0z"></path>
    </svg>
  );
};

export const ArrowNext = () => {
  return (
    <svg
      role="img"
      fill="currentColor"
      height="16"
      width="16"
      aria-hidden="true"
      aria-label="Siguiente"
      viewBox="0 0 16 16"
    >
      <path d="M4.97.47a.75.75 0 0 0 0 1.06L11.44 8l-6.47 6.47a.75.75 0 1 0 1.06 1.06L13.56 8 6.03.47a.75.75 0 0 0-1.06 0z"></path>
    </svg>
  );
};

export const Notifications = () => {
  return (
    <svg
      fill="currentColor"
      height="16"
      width="16"
      role="img"
      aria-label="Notificaciones"
      aria-hidden="true"
      viewBox="0 0 16 16"
    >
      <path d="M8 1.5a4 4 0 0 0-4 4v3.27a.75.75 0 0 1-.1.373L2.255 12h11.49L12.1 9.142a.75.75 0 0 1-.1-.374V5.5a4 4 0 0 0-4-4zm-5.5 4a5.5 5.5 0 0 1 11 0v3.067l2.193 3.809a.75.75 0 0 1-.65 1.124H10.5a2.5 2.5 0 0 1-5 0H.957a.75.75 0 0 1-.65-1.124L2.5 8.569V5.5zm4.5 8a1 1 0 1 0 2 0H7z"></path>
    </svg>
  );
};

function Navigation() {
  return (
    <div className="mb-4 flex justify-between">
      <div className="text-white flex gap-2">
        <a href="/" className="bg-zinc-900/60 w-8 h-8 p-2 rounded-full">
          <ArrowPrevious />
        </a>
        <a className="bg-zinc-900/60 w-8 h-8 p-2 rounded-full">
          <ArrowNext />
        </a>
      </div>

      <div className="flex gap-2">
        <button className="bg-zinc-900/60 w-8 h-8 p-2 rounded-full relative">
          <span className="absolute top-0 right-0 w-2 h-2 bg-[#3b72b5] rounded-full"></span>
          <Notifications />
        </button>
        {/* <button className="bg-zinc-900/60 w-8 h-8 p-2 rounded-full">
          Actividad
        </button> */}
        <button className="bg-zinc-900/60 w-8 h-8 rounded-full">
          <picture>
            <img
              className="w-6 h-6 object-cover object-center rounded-full m-auto"
              src="https://i.scdn.co/image/ab67757000003b828cc83a9f16e456b02ca389c2"
              alt="Santiago Sepúlveda"
            />
          </picture>
        </button>
      </div>
    </div>
  );
}

export default Navigation;

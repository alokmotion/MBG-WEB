

const NavBtn = () => {
  return (
    
        <button 
        class="group relative h-12 w-48 overflow-hidden rounded-lg bg-[#2563eb] text-lg shadow"
        onClick={() => setShowModal(true)}
      >
        <div class="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
        <span class="relative text-[white] group-hover:text-white   ">
          Demo
        </span>
      </button>
    
  )
}

export default NavBtn
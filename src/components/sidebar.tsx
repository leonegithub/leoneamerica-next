interface SidebarComponentProps {
  title: string;
  description: string;
}

const SidebarComponent: React.FC<SidebarComponentProps> = (
  {
    /* title,
  description,
  ...props */
  }
) => {
  return (
    <div className="w-64  p-4">
      <h2 className="font-bold text-lg mb-4">Menu</h2>
      <ul className="space-y-2">
        <li>
          <a href="#" className="text-blue-500 hover:text-blue-700">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="text-blue-500 hover:text-blue-700">
            Documenti
          </a>
        </li>
        <li>
          <a href="#" className="text-blue-500 hover:text-blue-700">
            Impostazioni
          </a>
        </li>
        <li>
          <a href="#" className="text-blue-500 hover:text-blue-700">
            Profilo
          </a>
        </li>
        <li>
          <a href="#" className="text-blue-500 hover:text-blue-700">
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SidebarComponent;

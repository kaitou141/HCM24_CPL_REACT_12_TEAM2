const NavBar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <ul className="flex flex-wrap justify-center space-x-4">
                <li><a href="/type-annotations" className="text-white hover:text-gray-300">Type Annotations</a></li>
                <li><a href="/interface-and-type" className="text-white hover:text-gray-300">Interface and Type</a></li>
                <li><a href="/generic" className="text-white hover:text-gray-300">Generic</a></li>
                <li><a href="/union-types" className="text-white hover:text-gray-300">Union Types</a></li>
                <li><a href="/enum" className="text-white hover:text-gray-300">Enum</a></li>
                <li><a href="/use-state" className="text-white hover:text-gray-300">useState</a></li>
                <li><a href="/use-effect" className="text-white hover:text-gray-300">useEffect</a></li>
                <li><a href="/use-context" className="text-white hover:text-gray-300">useContext</a></li>
                <li><a href="/use-reducer" className="text-white hover:text-gray-300">useReducer</a></li>
                <li><a href="/use-ref" className="text-white hover:text-gray-300">useRef</a></li>
                <li><a href="/use-memo" className="text-white hover:text-gray-300">useMemo</a></li>
                <li><a href="/use-callback" className="text-white hover:text-gray-300">useCallback</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;

import Link from 'next/link';

// Define the type for the countries object
interface Country {
  name: string;
  population: number;
  capital: string;
}

const countries: Record<string, Country> = {
  canada: { name: 'Canada', population: 38000000, capital: 'Ottawa' },
  france: { name: 'France', population: 67000000, capital: 'Paris' },
  japan: { name: 'Japan', population: 125800000, capital: 'Tokyo' },
  brazil: { name: 'Brazil', population: 213000000, capital: 'Brasília' },
  australia: { name: 'Australia', population: 25690000, capital: 'Canberra' },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Countries Directory
        </h1>
        <div className="bg-white shadow-sm rounded-lg divide-y divide-gray-200">
          {countries && Object.keys(countries).length > 0 ? (
            Object.keys(countries).map((countryKey) => {
              const country = countries[countryKey as keyof typeof countries];
              return (
                <Link
                  href={`/country/${countryKey}`}
                  key={countryKey}
                  className="block hover:bg-gray-50 transition duration-150 ease-in-out p-4"
                >
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-gray-900">
                      {country.name}
                    </h2>
                    <span className="text-gray-500">→</span>
                  </div>
                </Link>
              );
            })
          ) : (
            <p className="p-4 text-gray-500">No countries data available.</p>
          )}
        </div>
      </div>
    </div>
  );
}

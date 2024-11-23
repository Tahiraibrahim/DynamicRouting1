import { countries } from '../../data/countries';
import Link from 'next/link';

export default function CountryPage({ params }) {
  const country = countries[params.name.toLowerCase()];

  if (!country) {
    return (
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-red-600 mb-4">
            Country not found
          </h1>
          <Link 
            href="/"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            Return to Countries List
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              {country.name}
            </h1>
            <div className="space-y-4">
              <div>
                <h2 className="text-lg font-semibold text-gray-700">Population</h2>
                <p className="text-gray-600">
                  {country.population.toLocaleString()}
                </p>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-700">Capital</h2>
                <p className="text-gray-600">{country.capital}</p>
              </div>
            </div>
            <div className="mt-8">
              <Link 
                href="/"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                ← Back to Countries List
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
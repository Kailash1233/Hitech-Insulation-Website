import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export const Location = () => (
  <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
    <div className="max-w-6xl mx-auto space-y-12">
      {/* Section Header */}
      <div className="text-center">
        <p className="text-sm font-semibold text-blue-600 tracking-[0.3em] uppercase">Locations</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mt-4">
          Our Manufacturing Units
        </h2>
        <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
          Our facilities are strategically located across Chennai to support manufacturing,
          expansion, and specialized component production.
        </p>
      </div>

      {/* Maps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Unit 1 */}
        <Card className="border-2 border-gray-100 shadow-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="text-xl">Unit 1 - Guindy / Ekkatuthangal</CardTitle>
            <CardDescription>
              Primary manufacturing and operations facility serving core production.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="relative w-full aspect-[4/3]">
              <iframe
                title="Unit 1 - Guindy Ekkatuthangal"
                src="https://maps.google.com/maps?hl=en&q=Hitech%20Insulation&t=&z=20&ie=UTF8&iwloc=B&output=embed"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </CardContent>
        </Card>

        {/* Unit 2 */}
        <Card className="border-2 border-gray-100 shadow-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="text-xl">Unit 2 - Kundrathur</CardTitle>
            <CardDescription>
              Pressboard component manufacturing and specialized production unit.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="relative w-full aspect-[4/3]">
              <iframe
                title="Unit 2 - Kundrathur"
                src="https://maps.google.com/maps?hl=en&q=12%C2%B059%2712.3%22N%2080%C2%B005%2747.9%22E&t=&z=20&ie=UTF8&iwloc=B&output=embed"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

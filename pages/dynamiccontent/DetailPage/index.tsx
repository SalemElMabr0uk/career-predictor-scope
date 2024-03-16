import React from 'react';
import Choices from '../../dynamiccontent/Choices';
import Link from 'next/link'; // Import Link from next/link
import { useRouter } from 'next/router'; // Import useRouter for dynamic routing

interface DetailPageProps {
  title: string;
}

const DetailPage: React.FC<DetailPageProps> = ({ title }) => {
  const selectedChoice = Choices.find((Choice) => Choice.title === title);

  if (!selectedChoice) {
    return <div>Choice not found</div>;
  }

  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">{selectedChoice.pageContent.title}</h1>
      <img src={selectedChoice.image} alt={selectedChoice.pageContent.title} className="w-64 h-64 object-cover mb-4 rounded-full" />
      <p className="text-xl font-semibold mb-2">{selectedChoice.pageContent.periode}</p>
      <p className="text-lg mb-4">{selectedChoice.pageContent.mainLine}</p>
      <ul className="list-disc list-inside text-lg">
        {selectedChoice.pageContent.points.map((point: string, index: number) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
      {/* Use Link component to navigate to dynamic route */}
      <Link href={`/dynamiccontent/${router.query.title}`}>
        <a className="text-blue-500 hover:underline">Go to Dynamic Page</a>
      </Link>
    </div>
  );
};

export default DetailPage;

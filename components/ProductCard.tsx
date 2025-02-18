import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from 'next/image'

interface ProductCardProps {
    product: {
        id: number;
        name: string;
        description: string;
        price: string;
        image: string;
    }
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <Card className='hover:shadow-lg transition-shadow'>
            <CardHeader>
                <CardTitle>{product.name}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="relative h-48 w-full overflow-hidden rounded-lg">
                    <Image
                        src={product.image}
                        alt={product.name}
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <p className="text-lg font-semibold mt-2">{product.price}</p>
            </CardContent>
            <CardFooter>
                <Button variant="outline" className="w-full">View Details</Button>
            </CardFooter>
        </Card>
    )
}

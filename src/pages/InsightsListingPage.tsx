import React, { useState, useMemo } from 'react';
import NavigationMenu from '@/components/layout/NavigationMenu';
import Footer from '@/components/layout/Footer';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const allInsights = [
  { id: 1, title: 'The Future of AI in Business', description: 'Exploring how AI is reshaping industries and creating new opportunities for growth and innovation.', link: '/insights/future-of-ai', category: 'AI & GenAI', date: '2024-07-15', imageUrl: 'https://placehold.co/600x400/0284c7/ffffff?text=AI+Future' },
  { id: 2, title: 'Maximizing Cloud Efficiency: A CIO\'s Guide', description: 'Strategies for optimizing your cloud infrastructure for cost, performance, and security.', link: '/insights/cloud-efficiency', category: 'Cloud Engineering', date: '2024-07-10', imageUrl: 'https://placehold.co/600x400/7c3aed/ffffff?text=Cloud+Guide' },
  { id: 3, title: 'Data-Driven Decision Making in the Modern Enterprise', description: 'Leverage your data to make smarter, faster business decisions and gain a competitive edge.', link: '/insights/data-driven-decisions', category: 'Data & Analytics', date: '2024-07-05', imageUrl: 'https://placehold.co/600x400/059669/ffffff?text=Data+Decisions' },
  { id: 4, title: 'Crafting Engaging Digital Experiences', description: 'Key principles for designing user-centric digital products that captivate and convert.', link: '/insights/digital-experiences', category: 'Digital Experience', date: '2024-06-28', imageUrl: 'https://placehold.co/600x400/db2777/ffffff?text=Digital+UX' },
  { id: 5, title: 'Navigating the Complexities of Cybersecurity', description: 'Best practices for protecting your digital assets in an evolving threat landscape.', link: '/insights/cybersecurity-navigation', category: 'Security', date: '2024-06-20', imageUrl: 'https://placehold.co/600x400/dc2626/ffffff?text=Cybersecurity' },
  { id: 6, title: 'The Rise of Generative AI: Opportunities and Challenges', description: 'A deep dive into how Generative AI is transforming industries and what businesses should consider.', link: '/insights/generative-ai-rise', category: 'AI & GenAI', date: '2024-06-15', imageUrl: 'https://placehold.co/600x400/0ea5e9/ffffff?text=GenAI+Deep+Dive' },
  { id: 7, title: 'Serverless Architecture: When and How to Use It', description: 'Understanding the benefits and trade-offs of serverless computing for modern applications.', link: '/insights/serverless-architecture', category: 'Cloud Engineering', date: '2024-06-10', imageUrl: 'https://placehold.co/600x400/6d28d9/ffffff?text=Serverless' },
  { id: 8, title: 'Building a Robust Data Governance Framework', description: 'Essential steps for establishing effective data governance to ensure data quality, security, and compliance.', link: '/insights/data-governance', category: 'Data & Analytics', date: '2024-06-01', imageUrl: 'https://placehold.co/600x400/16a34a/ffffff?text=Data+Governance' },
];

const ITEMS_PER_PAGE = 6;

const InsightsListingPage: React.FC = () => {
  console.log('InsightsListingPage loaded');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  const categories = ['all', ...new Set(allInsights.map(insight => insight.category))];

  const filteredInsights = useMemo(() => {
    return allInsights
      .filter(insight => 
        insight.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        insight.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter(insight => 
        selectedCategory === 'all' || insight.category === selectedCategory
      );
  }, [searchTerm, selectedCategory]);

  const totalPages = Math.ceil(filteredInsights.length / ITEMS_PER_PAGE);
  const paginatedInsights = filteredInsights.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo(0,0); // Scroll to top on page change
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavigationMenu />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Insights</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <Card className="mb-12 shadow-lg">
            <CardHeader className="bg-muted p-6 md:p-8">
              <CardTitle className="text-3xl md:text-4xl font-bold text-primary">Our Insights & Expertise</CardTitle>
              <CardDescription className="text-md md:text-lg mt-2">
                Explore our latest articles, case studies, and whitepapers on technology trends and business innovation.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                    <Input 
                        type="search" 
                        placeholder="Search insights..." 
                        className="flex-grow"
                        value={searchTerm}
                        onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
                    />
                    <Select value={selectedCategory} onValueChange={(value) => { setSelectedCategory(value); setCurrentPage(1); }}>
                        <SelectTrigger className="w-full md:w-[200px]">
                            <SelectValue placeholder="Filter by category" />
                        </SelectTrigger>
                        <SelectContent>
                            {categories.map(category => (
                                <SelectItem key={category} value={category}>
                                    {category === 'all' ? 'All Categories' : category}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </CardContent>
          </Card>

          {paginatedInsights.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {paginatedInsights.map(insight => (
                <Card key={insight.id} className="flex flex-col overflow-hidden transition-shadow hover:shadow-xl">
                  <CardHeader className="p-0">
                     <img src={insight.imageUrl} alt={insight.title} className="w-full h-48 object-cover" />
                  </CardHeader>
                  <CardContent className="flex-grow p-6">
                    <p className="text-xs text-muted-foreground mb-1">{insight.date} | {insight.category}</p>
                    <CardTitle className="text-xl mb-2 line-clamp-2">{insight.title}</CardTitle>
                    <CardDescription className="text-sm line-clamp-3">{insight.description}</CardDescription>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button asChild variant="link" className="p-0 h-auto text-primary">
                      <Link to={insight.link}>Read More &rarr;</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
                <p className="text-xl text-muted-foreground">No insights found matching your criteria.</p>
            </div>
          )}

          {totalPages > 1 && (
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    href="#" 
                    onClick={(e) => { e.preventDefault(); handlePageChange(currentPage - 1);}} 
                    className={currentPage === 1 ? 'pointer-events-none opacity-50' : undefined}
                  />
                </PaginationItem>
                {[...Array(totalPages)].map((_, i) => {
                    const pageNum = i + 1;
                    // Basic pagination display logic, could be more complex for many pages
                    if (totalPages <= 5 || pageNum === 1 || pageNum === totalPages || Math.abs(pageNum - currentPage) <= 1) {
                        return (
                            <PaginationItem key={pageNum}>
                                <PaginationLink 
                                    href="#" 
                                    onClick={(e) => { e.preventDefault(); handlePageChange(pageNum);}}
                                    isActive={currentPage === pageNum}
                                >
                                    {pageNum}
                                </PaginationLink>
                            </PaginationItem>
                        );
                    } else if (Math.abs(pageNum - currentPage) === 2) {
                        return <PaginationEllipsis key={`ellipsis-${pageNum}`} />;
                    }
                    return null;
                })}
                <PaginationItem>
                  <PaginationNext 
                    href="#" 
                    onClick={(e) => { e.preventDefault(); handlePageChange(currentPage + 1);}}
                    className={currentPage === totalPages ? 'pointer-events-none opacity-50' : undefined}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InsightsListingPage;
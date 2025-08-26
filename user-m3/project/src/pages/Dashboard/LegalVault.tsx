import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../../components/Card';
import { Button } from '../../components/Button';
import { 
  FileText, 
  Download, 
  Shield, 
  Calendar, 
  Search,
  Filter,
  Eye,
  Lock,
  CheckCircle
} from 'lucide-react';

// Mock data for legal documents
const legalDocuments = [
  {
    id: 1,
    title: "Property Deed - Azure Bay Villas",
    type: "Property Deed",
    property: "Azure Bay Villas",
    date: "2024-01-15",
    size: "2.4 MB",
    status: "verified",
    description: "Official property deed and ownership documents",
    isSecured: true,
    downloadCount: 12
  },
  {
    id: 2,
    title: "Investment Agreement - Golden Sands",
    type: "Investment Agreement",
    property: "Golden Sands Villas",
    date: "2024-01-10",
    size: "1.8 MB",
    status: "verified",
    description: "Fractional ownership investment agreement",
    isSecured: true,
    downloadCount: 8
  },
  {
    id: 3,
    title: "Building Permit - Serene Heights",
    type: "Building Permit",
    property: "Serene Heights Villas",
    date: "2024-01-05",
    size: "3.2 MB",
    status: "pending",
    description: "Government approved building permits and approvals",
    isSecured: true,
    downloadCount: 5
  },
  {
    id: 4,
    title: "Insurance Policy - Azure Bay",
    type: "Insurance Policy",
    property: "Azure Bay Villas",
    date: "2023-12-20",
    size: "1.5 MB",
    status: "verified",
    description: "Comprehensive property insurance coverage",
    isSecured: true,
    downloadCount: 15
  },
  {
    id: 5,
    title: "Environmental Impact Assessment",
    type: "Environmental Report",
    property: "Golden Sands Villas",
    date: "2023-12-15",
    size: "4.1 MB",
    status: "verified",
    description: "Environmental compliance and impact assessment",
    isSecured: true,
    downloadCount: 3
  },
  {
    id: 6,
    title: "Financial Audit Report Q4 2023",
    type: "Financial Report",
    property: "All Properties",
    date: "2023-12-31",
    size: "2.7 MB",
    status: "verified",
    description: "Quarterly financial performance and audit report",
    isSecured: true,
    downloadCount: 22
  }
];

const documentTypes = ["All", "Property Deed", "Investment Agreement", "Building Permit", "Insurance Policy", "Environmental Report", "Financial Report"];

export const LegalVault: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All');

  const filteredDocuments = legalDocuments.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.property.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'All' || doc.type === selectedType;
    return matchesSearch && matchesType;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'verified':
        return 'text-green-600 bg-green-100';
      case 'pending':
        return 'text-yellow-600 bg-yellow-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Property Deed':
        return <FileText className="h-5 w-5 text-[#053DA6]" />;
      case 'Investment Agreement':
        return <Shield className="h-5 w-5 text-[#FB7F00]" />;
      case 'Building Permit':
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      default:
        return <FileText className="h-5 w-5 text-gray-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F7F2] p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-[#053DA6] rounded-lg">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-[#261C15]">Legal Vault</h1>
              <p className="text-gray-600">Blockchain-secured legal documents and certificates</p>
            </div>
          </div>

          {/* Security Notice */}
          <Card className="p-4 bg-gradient-to-r from-[#053DA6]/5 to-[#FB7F00]/5 border border-[#053DA6]/20">
            <div className="flex items-center gap-3">
              <Lock className="h-5 w-5 text-[#053DA6]" />
              <div>
                <p className="font-semibold text-[#261C15]">Blockchain Secured</p>
                <p className="text-sm text-gray-600">All documents are cryptographically secured and tamper-proof</p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <Card className="p-6">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search documents..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#053DA6] focus:border-[#053DA6] outline-none"
                  />
                </div>
              </div>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Advanced Filters
              </Button>
            </div>

            {/* Document Type Filters */}
            <div className="flex flex-wrap gap-2">
              {documentTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedType === type
                      ? 'bg-[#053DA6] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Documents List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          {filteredDocuments.map((document, index) => (
            <motion.div
              key={document.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <Card hover className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    {getTypeIcon(document.type)}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-bold text-[#261C15] mb-1">{document.title}</h3>
                        <p className="text-sm text-gray-600 mb-2">{document.description}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        {document.isSecured && (
                          <div className="flex items-center gap-1 text-xs text-[#053DA6] bg-[#053DA6]/10 px-2 py-1 rounded-full">
                            <Shield className="h-3 w-3" />
                            Secured
                          </div>
                        )}
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(document.status)}`}>
                          {document.status}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(document.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FileText className="h-4 w-4" />
                        <span>{document.size}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Download className="h-4 w-4" />
                        <span>{document.downloadCount} downloads</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Button size="sm" className="flex items-center gap-2">
                        <Download className="h-4 w-4" />
                        Download
                      </Button>
                      <Button variant="outline" size="sm" className="flex items-center gap-2">
                        <Eye className="h-4 w-4" />
                        Preview
                      </Button>
                      <div className="text-sm text-gray-600">
                        Property: <span className="font-medium text-[#261C15]">{document.property}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredDocuments.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-gray-400 mb-4">
              <FileText className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No documents found</h3>
            <p className="text-gray-500">Try adjusting your search criteria or filters</p>
          </motion.div>
        )}

        {/* Security Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12"
        >
          <Card className="p-6 bg-gradient-to-r from-[#053DA6] to-[#042f85] text-white">
            <div className="flex items-center gap-4">
              <Shield className="h-8 w-8" />
              <div>
                <h3 className="font-bold mb-1">Document Security & Authenticity</h3>
                <p className="text-sm opacity-90">
                  All documents in your Legal Vault are secured using blockchain technology, 
                  ensuring they cannot be tampered with or forged. Each document includes a 
                  cryptographic signature for verification.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};
import jsPDF from 'jspdf';

interface PackageDetails {
  name: string;
  speed: string;
  price: string | number;
  features?: string[];
}

interface SanitySettings {
  companyName?: string;
  companyAddress?: string;
  supportEmail?: string;
  termsAndConditions?: string;
}

const loadImage = (url: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = url;
    img.onload = () => resolve(img);
    img.onerror = (e) => reject(e);
  });
};

export async function generateQuotePDF(packageDetails: PackageDetails, sanitySettings: SanitySettings) {
  const doc = new jsPDF();
  
  // 1. Add the Company Logo (Top Left)
  try {
    const logoImg = await loadImage('/images/COLLOGO.png');
    doc.addImage(logoImg, 'PNG', 20, 20, 40, 15);
  } catch (e) {
    console.warn("Could not load logo image for PDF", e);
  }

  // 2. Create the Letterhead Header (Top Right)
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  doc.text(sanitySettings.companyName || 'COL', 190, 25, { align: 'right' });
  
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.text(sanitySettings.companyAddress || '', 190, 32, { align: 'right' });
  doc.text(`Email: ${sanitySettings.supportEmail || ''}`, 190, 37, { align: 'right' });

  // Draw a sleek horizontal line
  doc.setDrawColor(5, 29, 64); // Brand Blue (#051d40)
  doc.setLineWidth(0.5);
  doc.line(20, 45, 190, 45);

  // 3. Style the Body Content
  // Title
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.text('QUOTATION', 105, 60, { align: 'center' });

  // Vertical spacing
  let yOffset = 80;

  // Package Details Grid
  doc.setFontSize(12);
  
  doc.setFont('helvetica', 'bold');
  doc.text('Package:', 20, yOffset);
  doc.setFont('helvetica', 'normal');
  doc.text(packageDetails.name, 60, yOffset);
  
  yOffset += 10;
  doc.setFont('helvetica', 'bold');
  doc.text('Bandwidth:', 20, yOffset);
  doc.setFont('helvetica', 'normal');
  doc.text(packageDetails.speed, 60, yOffset);
  
  yOffset += 10;
  doc.setFont('helvetica', 'bold');
  doc.text('Monthly Price:', 20, yOffset);
  doc.setFont('helvetica', 'normal');
  doc.text(`${packageDetails.price} BDT`, 60, yOffset);

  // Included Features
  yOffset += 20;
  if (packageDetails.features && packageDetails.features.length > 0) {
    doc.setFont('helvetica', 'bold');
    doc.text('Included Features:', 20, yOffset);
    
    yOffset += 10;
    doc.setFont('helvetica', 'normal');
    
    packageDetails.features.forEach((feature) => {
      // Draw a neat bullet
      doc.setFillColor(5, 29, 64); // Brand Blue
      doc.circle(23, yOffset - 1.5, 1, 'F');
      
      doc.text(feature, 28, yOffset);
      yOffset += 8;
    });
  }

  // 4. Create the Footer (Fine Print)
  // Draw another horizontal line near the bottom
  doc.setDrawColor(200, 200, 200);
  doc.line(20, 270, 190, 270);

  // Terms and Conditions
  if (sanitySettings.termsAndConditions) {
    doc.setTextColor(128, 128, 128); // Professional grey
    doc.setFontSize(9);
    const splitTerms = doc.splitTextToSize(sanitySettings.termsAndConditions, 170);
    doc.text(splitTerms, 20, 275);
  }

  doc.save(`Quote_${packageDetails.name.replace(/\s+/g, '_')}.pdf`);
}

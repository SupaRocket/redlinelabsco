export async function POST(request) {
  try {
    const data = await request.json();
    
    // Validate required fields
    if (!data.name || !data.email) {
      return new Response(
        JSON.stringify({ success: false, message: 'Name and email are required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }
    
    // Format data for the spreadsheet
    const formattedData = {
      timestamp: new Date().toISOString(),
      name: data.name,
      email: data.email,
      company: data.company || '',
      role: data.role || '',
    };
    
    // In a real implementation, you would connect to a spreadsheet API here
    // For example, using Google Sheets API or Airtable
    
    // For now, we'll log the data and simulate a successful submission
    console.log('Waitlist submission:', formattedData);
    
    // Return success response
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Thank you for joining our waitlist!' 
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
    
  } catch (error) {
    console.error('Waitlist submission error:', error);
    return new Response(
      JSON.stringify({ success: false, message: 'An error occurred processing your request' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
} 
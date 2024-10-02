export const downloadFile = ({
  filename,
  content,
  contentType = 'application/csv',
}: {
  filename: string
  content: any
  contentType: string
}) => {
  // Create a blob with the content
  const blob = new Blob([content], { type: contentType })

  // Create a link element
  const link = document.createElement('a')

  // Create an object URL for the blob
  const url = URL.createObjectURL(blob)

  // Set the download attribute with the filename
  link.href = url
  link.download = filename

  // Append the link to the body
  document.body.appendChild(link)

  // Programmatically click the link to trigger the download
  link.click()

  // Remove the link from the document
  document.body.removeChild(link)

  // Revoke the object URL to free up memory
  URL.revokeObjectURL(url)
}

const AppFooter = () => {
  const now = new Date()

  // add a date
  return (
    <footer>
      <p>
        &copy; Robin James Kerrison 2022. Last updated{' '}
        {now.toLocaleDateString()}.
      </p>
    </footer>
  )
}

export default AppFooter

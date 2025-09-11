-- Fix RLS policy for guest orders
-- Drop existing policies
DROP POLICY IF EXISTS "Guests can insert orders" ON orders;
DROP POLICY IF EXISTS "Users can view their own orders" ON orders;
DROP POLICY IF EXISTS "Admins can manage all orders" ON orders;

-- Create new policies that properly handle guest checkout
CREATE POLICY "Anyone can insert orders" 
ON orders 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Users can view their own orders" 
ON orders 
FOR SELECT 
USING (
  auth.uid() = user_id OR 
  (user_id IS NULL AND auth.uid() IS NULL)
);

CREATE POLICY "Admins can manage all orders" 
ON orders 
FOR ALL 
USING (
  EXISTS (
    SELECT 1 FROM profiles 
    WHERE profiles.user_id = auth.uid() 
    AND profiles.role = 'admin'
  )
);

-- Also fix order_items RLS for guest orders
DROP POLICY IF EXISTS "Users can view their own order items" ON order_items;
DROP POLICY IF EXISTS "Admins can manage all order items" ON order_items;

CREATE POLICY "Anyone can insert order items" 
ON order_items 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Users can view their own order items" 
ON order_items 
FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM orders 
    WHERE orders.id = order_items.order_id 
    AND (orders.user_id = auth.uid() OR (orders.user_id IS NULL AND auth.uid() IS NULL))
  )
);

CREATE POLICY "Admins can manage all order items" 
ON order_items 
FOR ALL 
USING (
  EXISTS (
    SELECT 1 FROM profiles 
    WHERE profiles.user_id = auth.uid() 
    AND profiles.role = 'admin'
  )
);